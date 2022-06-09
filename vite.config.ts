// @ts-nocheck
import { defineConfig } from "vite";
import * as path from "path";
import * as fs from "fs";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import viteSvgr from 'vite-plugin-svgr';

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
      generateScopedName: "[local]_[hash:base64:5]",
    },
  },
  plugins: [
    viteSvgr(),
    eslint(),
    react({
      babel: {
        plugins: ["./config/auto-css-modules.js"],
      },
    }),
  ],
});
