<script setup lang="ts">
const { sayHi } = useUtils()
sayHi()

const { $hello } = useNuxtApp()
$hello('user')

const counter = useCounterStore()
console.log('counter', counter)
</script>

<template>
  <div>
    <img src="~/assets/img_1.webp" alt="logo" width="100" />
    <ContentDoc />
    <IconsBell />
    <Alert />
    <Profile />
    <Counter />
  </div>
</template>
