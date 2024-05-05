// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth', '@nuxt/eslint'],
  auth: {
    baseURL: 'http://localhost:3000',
    provider: {
      type: 'authjs',
    },
  },
  imports: {
    dirs: ['types/*.ts'],
  },
  eslint: {
    config: {
      stylistic: {
        semi: false,
        indent: 2,
        commaDangle: 'always-multiline',
        quotes: 'single',
      },
    },
  },
})