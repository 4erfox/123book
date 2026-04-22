import { defineConfig } from 'vite'
import path from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Автоматически находим все HTML файлы в public/
function getInputs() {
  const inputs = {
    main: path.resolve(__dirname, 'public/index.html'),
  }

  // Находим все страницы автоматически
  const pages = glob.sync('public/pages/**/*.html', { cwd: __dirname })
  pages.forEach(file => {
    // Ключ: "pages/onepage" (без .html)
    const key = file.replace('public/', '').replace('.html', '').replace(/\//g, '_')
    inputs[key] = path.resolve(__dirname, file)
  })

  return inputs
}

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/etiquettebook/',

  root: 'public',

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: getInputs()
    }
  },

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7778',
        changeOrigin: true,
      }
    }
  }
}))