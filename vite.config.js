import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',  // ← ЭТО САМОЕ ВАЖНОЕ! Относительные пути
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7778',
        changeOrigin: true,
      }
    },
    fs: {
      allow: [
        path.resolve(__dirname),
        path.resolve(__dirname, 'admin'),
        path.resolve(__dirname, 'public'),
      ]
    }
  },
  root: 'public',
  publicDir: 'public',
  resolve: {
    alias: {
      '/admin': path.resolve(__dirname, 'admin'),
    }
  },
  optimizeDeps: {
    exclude: ['admin-panel.js', 'bridge.js']
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});