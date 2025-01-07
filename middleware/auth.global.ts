export default defineNuxtRouteMiddleware((to, from) => {
  // const isLoggedIn = true
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath)
  // } else {
  //   return navigateTo('/login')
  // }
  console.log('global auth middleware', to, from)
})
