<script setup lang="ts">
const counter = useCounter()
</script>

<template>
  <div>Counter: {{ counter }}</div>
  <button @click="counter++">count+</button>
  <button @click="counter--">count-</button>
</template>
