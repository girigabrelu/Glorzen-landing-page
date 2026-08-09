import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Glorzen-landing-page/',
  server: {
    port: 3000,
    open: true
  }
})
