import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: Port or proxy settings go here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
