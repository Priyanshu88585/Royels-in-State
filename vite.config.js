import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['motion-dom']
  },
  resolve: {
    alias: {
      'motion-dom': false
    }
  }
})