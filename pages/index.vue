<script setup lang="ts">
const { sayHi } = useUtils()
sayHi()
</script>

<template>
  <div>
    <img src="~/assets/img_1.webp" alt="logo" width="100" />
    <IconsBell />
    <Alert />
    <Profile />
  </div>
</template>
