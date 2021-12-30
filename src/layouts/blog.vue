<script lang="ts" setup>
import { assertIsBlogRouteLocation } from '~/utils'
import { prevRouteLocation } from '~/store'

const route = useRoute()
const router = useRouter()

assertIsBlogRouteLocation(route)
const bid = computed(() => route.meta.bid)
const title = computed(() => route.meta.title)
const time = computed(() => route.meta.time)
const tags = computed(() => route.meta.tags)

const back = () => {
  if (prevRouteLocation.value?.path === '/')
    router.back()
  else
    router.push('/')
}
</script>

<template>
  <main
    p="x-4 t-16 b-12"
    space-y-12
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
    <div>
      <router-link
        :to="prevRouteLocation?.path === '/' ? prevRouteLocation.fullPath : '/'"
        text-btn
        text-gray
        @click.prevent="back"
      >
        ← 返回上一页
      </router-link>
      <br>
      <a
        :href="`https://github.com/mys1024/mys.1024.cab/tree/main/src/pages/blog/${bid}`"
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
