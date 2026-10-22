<script setup lang="ts">
const route = useRoute()
const slide = ref(0)
const slideshow = computed(() => ['/', '/our-businesses/sportline'].includes(route.path))
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => { timer = setInterval(() => { slide.value = (slide.value + 1) % 3 }, 4000) })
onUnmounted(() => clearInterval(timer))
watch(() => route.path, () => { slide.value = 0 })
</script>
<template>
  <div>
    <div id="header" class="g12">
      <div v-if="slideshow" class="cycle-slideshow" aria-hidden="true">
        <img v-for="(item, index) in ['img1', 'img2', 'img4']" :key="item" src="/img/clear.png" :class="[item, { 'slide-visible': slide === index }]" alt="">
      </div>
      <div class="container"><h1>H. Young</h1></div>
    </div>
    <div class="cf" />
  </div>
</template>
