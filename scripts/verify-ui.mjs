import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { chromium } from 'playwright'

const PORT = 4180
const BASE = `http://127.0.0.1:${PORT}`
const root = path.dirname(fileURLToPath(import.meta.url))
const viteBin = path.resolve(root, '../node_modules/vite/bin/vite.js')

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function waitForServer(url, attempts = 50) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      // retry
    }
    await wait(200)
  }
  throw new Error(`Preview server did not start at ${url}`)
}

const preview = spawn(
  process.execPath,
  [viteBin, 'preview', '--host', '127.0.0.1', '--port', String(PORT)],
  { stdio: 'pipe' },
)

let failed = false

try {
  await waitForServer(BASE)
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 20000 })
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'), {
    timeout: 8000,
  })

  // Hero keeps Pexels video + local backdrop fallback
  const hasVideo = await page.locator('#top video').count()
  if (hasVideo < 1) throw new Error('Hero video missing')
  const hasBackdrop = await page.locator('.hero-backdrop').count()
  if (hasBackdrop < 1) throw new Error('Missing .hero-backdrop fallback')

  await page.screenshot({ path: path.join(root, 'verify-desktop.png') })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.screenshot({ path: path.join(root, 'verify-mobile.png') })

  await page.getByRole('button', { name: 'VI', exact: true }).first().click()
  await page.waitForFunction(() => document.documentElement.dataset.lang === 'vi')
  await wait(300)
  await page.screenshot({ path: path.join(root, 'verify-mobile-vi.png') })

  // Exercise project modal on mobile
  await page.locator('#projects button').first().scrollIntoViewIfNeeded()
  await page.locator('#projects button').first().click()
  await page.waitForSelector('[role="dialog"]')
  await page.screenshot({ path: path.join(root, 'verify-modal.png') })
  await page.keyboard.press('Escape')
  await page.waitForSelector('[role="dialog"]', { state: 'detached' })

  await browser.close()
  console.log('verify-ui: ok')
} catch (err) {
  failed = true
  console.error('verify-ui: failed')
  console.error(err)
} finally {
  preview.kill('SIGTERM')
}

process.exit(failed ? 1 : 0)
