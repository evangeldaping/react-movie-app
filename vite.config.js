import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [], // Do NOT externalize react or react-dom
    },
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [react()],
})
