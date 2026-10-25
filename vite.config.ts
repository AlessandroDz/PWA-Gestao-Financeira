import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pagesBasePath = process.env.VITE_BASE_PATH?.replace(/^\/+|\/+$/g, '')

// https://vite.dev/config/
export default defineConfig({
  base: pagesBasePath ? `/${pagesBasePath}/` : '/',
  plugins: [react()],
})
