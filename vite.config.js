import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        // Node.js built-ins (if your app uses server-side code)
        'fs', 'path', 'os',

        // External libraries you want to exclude from the bundle
        'axios', 'lodash',

        // Dependencies to leave out of the bundle
        'react', 'react-dom', // For example, if you're using React and including it via CDN
      ],
    },
  },
  css: {
    preprocessorOptions: {
      // If you're using SCSS/SASS or other preprocessors, ensure they are configured
    },
  },
  plugins: [react()],
})
