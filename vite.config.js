import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SUT-23-Labb-2-CV/",
  plugins: [react()],
})
