// @ts-check
const { resolve } = require("path");
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  build: {
    rollupOptions: {
      input: {
        tizen: resolve(__dirname, "index.html"),
      },
    },
    watch: {},
  },
  preview: {
    host: true,
    open: "/tizen",
    port: 9000,
  },
  publicDir: "tizen/public",
};

export default config;
