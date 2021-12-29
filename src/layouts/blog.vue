<script lang="ts" setup>
import { assertIsBlogRouteLocation } from '~/utils'

const route = useRoute()
assertIsBlogRouteLocation(route)
const bid = computed(() => route.meta.bid)
const title = computed(() => route.meta.title)
const time = computed(() => route.meta.time)
const tags = computed(() => route.meta.tags)
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
    <div text-lg>
      <router-view />
    </div>

    <!-- footer -->
    <div pt-8>
      <Footer />
    </div>
  </main>
</template>
