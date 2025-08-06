import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({
    customElement: true,
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag == 'typing-test'
      }
    }
  }), dts(),],
  base: "./",
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "TestComponent",
      fileName: "typing-test",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
