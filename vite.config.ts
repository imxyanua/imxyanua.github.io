import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// User site (imxyanua.github.io) is served from domain root.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
