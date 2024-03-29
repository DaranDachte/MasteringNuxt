import { DefineNuxtConfig } from "nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
});
