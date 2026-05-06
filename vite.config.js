import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup/index.html")
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",

        manualChunks: undefined
      }
    },
    outDir: "dist",
    emptyOutDir: true
  }
});