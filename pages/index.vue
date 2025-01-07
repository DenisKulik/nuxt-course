<script setup lang="ts">
const { sayHi } = useUtils()
sayHi()

const { $hello } = useNuxtApp()
$hello('user')
</script>

<template>
  <div>
    <img src="~/assets/img_1.webp" alt="logo" width="100" />
    <ContentDoc />
    <IconsBell />
    <Alert />
    <Profile />
  </div>
</template>
