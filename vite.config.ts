/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "json-summary"],
    },
    setupFiles: ["./test/setup.ts"],
  },
});

coverage: {
  reporter: ["text", "json", "json-summary"],
  lines: 100,
  branches: 100,
  "function": 100, 
  statements: 100,
},

