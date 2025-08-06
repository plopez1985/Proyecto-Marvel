import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Proyecto-Marvel/', // Importante: debe coincidir con el nombre del repo
  build: {
    outDir: 'dist',
  },
})
