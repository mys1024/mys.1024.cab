import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { prevRouteLocation } from '~/store'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    if (from.path === '/' && from.matched.length === 0)
      return
    prevRouteLocation.value = from
  }
})

export default router
