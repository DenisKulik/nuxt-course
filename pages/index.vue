<script setup lang="ts">
import { useCounterStore } from '~/stores/myStore.ts'

const { sayHi } = useUtils()
sayHi()

const { $hello } = useNuxtApp()
$hello('user')

const counter = useCounterStore()
console.log('counter', counter)

const { data: products, status } = await useLazyFetch('/api/products')
console.log('data', toRaw(products.value))
</script>

<template>
  <div>
    <img src="~/assets/img_1.webp" alt="logo" width="100" />
    <ContentDoc />
    <IconsBell />
    <Alert />
    <Profile />
    <Counter />
    {{ status === 'pending' ? 'loading' : products }}
  </div>
</template>
