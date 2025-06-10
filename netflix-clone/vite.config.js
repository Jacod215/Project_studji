import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: '.',
    assetsDir: 'assets',
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
