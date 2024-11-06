import { defineNuxtConfig } from 'nuxt/config'
import pkg from './package.json'

export default defineNuxtConfig({

  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthub/core',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],
  app: {
    rootAttrs: {
      'vaul-drawer-wrapper': '',
      'class': 'bg-[--ui-bg]',
    },
  },

  site: {
    url: 'https://content3.nuxt.dev',
  },

  content: {
    database: {
      type: 'd1',
      binding: 'DB',
    },
    studio: {
      enabled: true,
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  routeRules: {
    '/': { redirect: '/getting-started', prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-09',

  hub: {
    database: true,
    cache: true,
  },

  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },

  image: {
    provider: 'ipx',
  },
  ogImage: {
    zeroRuntime: true,
  },
})
