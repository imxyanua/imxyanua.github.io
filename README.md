# xyanua / personal portfolio

Cybersecurity & AI engineer portfolio for [imxyanua.github.io](https://imxyanua.github.io/).

Built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed to GitHub Pages via Actions.

## Features

- CRT / terminal aesthetic with deferred Pexels hero video (720p/1080p) + local backdrop fallback
- VI / EN / ZH i18n with persisted language preference
- Case-study modals, contact channels, optional YouTube music (loads only on play)
- Open Graph / Twitter cards, `robots.txt`, and sitemap

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Smoke check

```bash
npm run smoke
```

Runs a Playwright headless pass against the production build: home render, language switch, case modal open/close.

## Stack notes

- User site (`imxyanua.github.io`) is served from domain root (`base: '/'` in Vite).
- Pixel/terminal labels use Google Fonts **VT323** (self-contained CDN; no onlinewebfonts dependency).
- YouTube IFrame API is not requested until the visitor presses play.
