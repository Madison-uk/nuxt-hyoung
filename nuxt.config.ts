export default defineNuxtConfig({
  compatibilityDate: '2026-10-22',
  modules: ['@nuxtjs/seo'],
  runtimeConfig: { seoProKey: '' },
  site: { url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.hyoung.co.uk', name: 'H. Young Holdings plc', defaultLocale: 'en-GB' },
  app: { head: { htmlAttrs: { lang: 'en-GB' }, titleTemplate: '%s | H. Young Holdings plc', link: [{ rel: 'stylesheet', href: '/css/style.css' }, { rel: 'stylesheet', href: '/css/font-awesome.min.css' }, { rel: 'stylesheet', href: '/css/nav.css' }, { rel: 'stylesheet', href: '/css/cookie.css' }, { rel: 'stylesheet', href: '/css/nuxt.css' }, { rel: 'icon', href: '/img/logo-hyh.png', type: 'image/png' }] } },
  nitro: { prerender: { routes: ["/", "/our-businesses", "/cookie-policy", "/legal", "/contact-details", "/modern-slavery", "/gender-paygap", "/section-172-companies-act", "/our-businesses/animal", "/our-businesses/leeda", "/our-businesses/madison", "/our-businesses/saxon", "/our-businesses/sportline", "/our-businesses/rohan"], crawlLinks: true } },
  ogImage: { enabled: false },
  aiReady: false,
  skewProtection: false,
})
