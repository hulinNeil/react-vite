// @ts-nocheck
import { defineConfig } from "vite";
import * as path from "path";
import * as fs from "fs";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolveApp("src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
    modules: {
      // scopeBehaviour: "global",
      // globalModulePaths: [/test/ig, /ss_module/ig, /\.module\./ig,new RegExp(`\\.module`)],
      generateScopedName: "[local]_[hash:base64:5]",
    },
  },
  plugins: [
    eslint(),
    react({
      babel: {
        plugins: ["./auto-css-modules.js"],
      },
    }),
  ],
});
