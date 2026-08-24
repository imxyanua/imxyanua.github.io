import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { chromium } from 'playwright'

const PORT = 4173
const BASE = `http://127.0.0.1:${PORT}`
const root = path.dirname(fileURLToPath(import.meta.url))
const viteBin = path.resolve(root, '../node_modules/vite/bin/vite.js')

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      // retry
    }
    await wait(250)
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
  const page = await browser.newPage()

  const badHosts = []
  page.on('request', (req) => {
    const u = req.url()
    if (u.includes('onlinewebfonts.com')) badHosts.push(u)
  })

  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 20000 })
  await page.waitForSelector('text=XYANUA', { timeout: 10000 })

  // Loader should dismiss
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'), {
    timeout: 8000,
  })

  // Hero video element present; source attaches after loader (deferred)
  const hasVideo = await page.locator('#top video').count()
  if (hasVideo < 1) throw new Error('Hero video missing')
  await page.waitForFunction(
    () => {
      const v = document.querySelector('#top video')
      return Boolean(v && v.getAttribute('src'))
    },
    { timeout: 8000 },
  )

  // Language switch EN -> VI
  const viBtn = page.getByRole('button', { name: 'VI', exact: true }).first()
  await viBtn.click()
  await page.waitForFunction(() => document.documentElement.dataset.lang === 'vi', {
    timeout: 5000,
  })

  // Open first case study, then close with Escape
  const caseBtn = page.locator('#projects button').first()
  await caseBtn.scrollIntoViewIfNeeded()
  await caseBtn.click()
  await page.waitForSelector('[role="dialog"]', { timeout: 5000 })
  await page.keyboard.press('Escape')
  await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 5000 })

  if (badHosts.length) {
    throw new Error(`Unexpected third-party assets: ${badHosts.join(', ')}`)
  }

  // YouTube API should NOT load until play
  const ytBefore = await page.evaluate(() => Boolean(document.getElementById('youtube-iframe-api')))
  if (ytBefore) throw new Error('YouTube API loaded before user interaction')

  await browser.close()
  console.log('smoke: ok')
} catch (err) {
  failed = true
  console.error('smoke: failed')
  console.error(err)
} finally {
  preview.kill('SIGTERM')
}

process.exit(failed ? 1 : 0)
