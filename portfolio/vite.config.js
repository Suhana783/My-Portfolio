import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    watch: {
      ignored: [
        '**/.config/Code/User/History/**',
        '**/.vscode/**',
        '**/node_modules/**',
      ],
    },
  },
  plugins: [
    tailwindcss(),
  ],
})