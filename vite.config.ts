import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Isso força o Vite a tratar essas bibliotecas com prioridade
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})