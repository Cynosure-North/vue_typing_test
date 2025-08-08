import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  plugins: [vue({
    customElement: true,
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag == 'typing-test'
      }
    }
  }) ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TestComponent",
      fileName: "typing-test",
    },
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
