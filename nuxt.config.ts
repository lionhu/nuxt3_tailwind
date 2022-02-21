import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: ["@pinia/nuxt", "~/modules/nuxt-axios"],
  axios: {
    baseUrl: "http://localhost:8000",
    credentials: true,
    proxy: false, // if you want to enable proxy
  },
  // proxy: {
  //proxy config
  // },
  plugins: ["@/plugins/pinia.js"],
});
