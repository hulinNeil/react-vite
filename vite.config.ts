// @ts-nocheck
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import viteSvgr from 'vite-plugin-svgr';

const webConfig = require('./config/web');
const utils = require('./config/utils');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': utils.resolveApp('src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
  define: utils.encodeObjectValue(webConfig),
  plugins: [
    viteSvgr(),
    eslint(),
    react({
      babel: {
        plugins: ['./config/auto-css-modules.js'],
      },
    }),
  ],
});
