<script setup lang="ts">
const nuxt = useNuxtApp()
const route = useRoute()

console.log(nuxt)
console.log(route)
</script>

<template>
  <div>event id: {{ route.params.id }}</div>
</template>

<style scoped></style>
