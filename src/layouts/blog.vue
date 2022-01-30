<script lang="ts" setup>
import { assertIsBlogRouteLocation } from '~/types'
import { prevRouteLocation } from '~/store'
import { scrollToElement } from '~/utils'

const route = useRoute()
const router = useRouter()

assertIsBlogRouteLocation(route)
const bid = computed(() => route.meta.bid)
const title = computed(() => route.meta.title)
const time = computed(() => route.meta.time)
const tags = computed(() => route.meta.tags)
const type = computed(() => route.meta.type)

const githubBaseUrl = 'https://github.com/mys1024/mys.1024.cab/blob/main'
const githubUrl = computed(
  () => `${githubBaseUrl}/pages/blog/${bid.value}/index.${type.value}`,
)

const back = (event: Event) => {
  event.preventDefault()
  if (prevRouteLocation.value?.path === '/')
    router.back()
  else
    router.push('/')
}

onMounted(async() => {
  // handle route.hash
  if (route.hash)
    scrollToElement(route.hash, 500)
  // handle anchor links
  const headerAnchors = document.querySelectorAll<HTMLElement>('.header-anchor')
  headerAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault()
      scrollToElement(anchor)
      router.replace(route.path + anchor.getAttribute('href'))
    })
  })
})
</script>

<template>
  <main
    p="x-4 t-16 b-12"
    space-y-8
    mx-auto
    container
    w="md:7/10 lg:3/5 xl:2/5"
    text="gray-700 dark:gray-200"
  >
    <!-- blog info -->
    <BlogInfo
      :bid="bid"
      :title="title"
      :time="time"
      :tags="tags"
      :enable-link="false"
      size="large"
    />

    <!-- blog content -->
    <div>
      <router-view />
    </div>

    <!-- toolbar -->
    <div pt-2>
      <router-link
        :to="prevRouteLocation?.path === '/' ? prevRouteLocation.fullPath : '/'"
        text-btn
        text-gray
        @click.capture="back"
      >
        ← 返回上一页
      </router-link>
      <br>
      <a
        :href="githubUrl"
        text-btn
        text-gray
      >
        ← 在 Github 上查看本篇 Blog
      </a>
    </div>

    <!-- footer -->
    <div pt-8>
      <Footer />
    </div>
  </main>
</template>
