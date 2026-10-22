<script setup lang="ts">
const open = ref(false)
const route = useRoute()
const links = [{ to: '/', label: 'Home' }, { to: '/our-businesses', label: 'Our Businesses' }, { to: '/contact-details', label: 'Contact Details' }, { to: '/legal', label: 'Legal' }]
watch(() => route.path, () => { open.value = false })
</script>
<template>
  <nav id="nav-wrap" aria-label="Main navigation">
    <div id="nav-inner">
      <ul id="nav" :class="{ 'menu-open': open }">
        <li v-for="(link, index) in links" :id="`nav${index + 1}`" :key="link.to"><NuxtLink :to="link.to">{{ link.label }}</NuxtLink></li>
      </ul>
    </div>
    <div id="menu-icon"><button type="button" :aria-expanded="open" aria-controls="nav" @click="open = !open">Menu <i class="icon-reorder" aria-hidden="true" /></button></div>
  </nav>
</template>
