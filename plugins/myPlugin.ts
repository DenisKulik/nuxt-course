export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hello: (msg: string) => console.log(`hi ${msg}`)
    }
  }
})
