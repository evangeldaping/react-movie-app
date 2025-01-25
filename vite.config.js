import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        // Dependencies to leave out of the bundle
        'react', 'react-dom', // For example, if you're using React and including it via CDN
      ],
    },
  },
  plugins: [react()],
})
