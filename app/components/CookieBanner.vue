<script setup lang="ts">
const consent = useCookie<string | null>('cookieAlertState', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' })
const ready = ref(false)
const loaded = ref(false)
function loadAnalytics() {
  if (consent.value !== '1' || loaded.value) return
  loaded.value = true
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5SJQS4'
  document.head.appendChild(script)
}
function choose(value: string) { consent.value = value; loadAnalytics() }
onMounted(() => { ready.value = true; loadAnalytics() })
</script>
<template>
  <div v-if="ready && consent == null" id="cb-holder" class="cookiealert" role="region" aria-label="Cookie preferences">
    <div id="cb-container">
      <div id="cb-text">
        <p>This website is operated by H. Young (Operations) Limited. It uses cookies and similar technologies to help us understand how the website is used and improve your browsing experience. See our <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink> for more information.</p>
        <p>Choose whether to allow non-essential analytics cookies.</p>
      </div>
      <div id="cb-btn-holder">
        <div id="cb-btn-accept" class="cb-btn"><button @click="choose('1')">Accept</button></div>
        <div id="cb-btn-decline" class="cb-btn"><button @click="choose('0')">Decline</button></div>
      </div>
    </div>
  </div>
</template>
