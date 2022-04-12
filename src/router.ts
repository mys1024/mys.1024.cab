import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { prevRouteLocation } from '~/store'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to, from) => {
  if (from.path !== '/' || from.matched.length !== 0) {
    if (to.path !== from.path)
      prevRouteLocation.value = from
  }
  if (typeof to.meta.title === 'string')
    document.title = `${to.meta.title} - Mys1024`
  else
    document.title = 'Mys1024'
})

export default router
