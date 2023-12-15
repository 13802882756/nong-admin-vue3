import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/main" : "/",
  plugins: [vue()],
  // define: {
  //   'process.env.NODE_ENV': 'production'
  // },
  build: {
    outDir: "main",
  },
  server: {
    headers: {
      // 重点1: 允许跨域访问子应用页面
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
