import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const htmlPath = path.join(__dirname, 'og.html')
const outDir = path.join(__dirname, '..', 'public')
const outPath = path.join(outDir, 'og.png')

await mkdir(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
await page.screenshot({ path: outPath, type: 'png' })
await browser.close()
console.log('Wrote', outPath)
