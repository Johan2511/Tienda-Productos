import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '' // Copia `_redirects` a la raíz de la carpeta de salida (`dist`)
        }
      ]
    })
  ],
})

