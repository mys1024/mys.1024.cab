<route lang="yaml">
meta:
  title: Blog
</route>

<script setup lang="ts">
import { isBlogRouteRecord } from '~/utils'

const router = useRouter()
const route = useRoute()

const blogRoutes = router
  .getRoutes()
  .filter(isBlogRouteRecord)
  .sort((a, b) => b.meta.bid - a.meta.bid)
const tag = computed(() => route.query.tag)
const matchedBlogRoutes = computed(() => {
  const tagOrTags = tag.value
  if (!tagOrTags)
    return blogRoutes
  else if (typeof tagOrTags === 'string')
    return blogRoutes.filter(r => r.meta.tags.includes(tagOrTags))
  else
    return []
})
</script>

<template>
  <div space-y-16>
    <div space-x-2 font-bold>
      <h1 text-5xl inline-block>
        Blog
      </h1>
      <span v-if="tag" text-xl inline-block text-gray>
        #{{ tag }}
      </span>
    </div>

    <div space-y-8>
      <template v-if="matchedBlogRoutes.length > 0">
        <BlogInfo
          v-for="blogRoute in matchedBlogRoutes"
          :key="blogRoute.meta.bid"
          :bid="blogRoute.meta.bid"
          :title="blogRoute.meta.title"
          :time="blogRoute.meta.time"
          :tags="blogRoute.meta.tags"
          :enable-link="true"
          size="normal"
        />
      </template>
      <template v-else>
        <div>
          <p text-2xl text-gray-500>
            这里空空如也 😕
          </p>
          <p text-base text-gray>
            有没有这么一种可能，你走错地方了。
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
