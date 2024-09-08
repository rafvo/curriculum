// nuxt.config.ts
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
