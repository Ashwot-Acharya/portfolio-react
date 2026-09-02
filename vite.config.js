import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

const isReport = process.env.REPORT === 'true'

export default defineConfig({
  plugins: [
    react(),
    ...(isReport ? [visualizer({ open: false, gzipSize: true, brotliSize: true })] : []),
  ],
  base: "/"
})
