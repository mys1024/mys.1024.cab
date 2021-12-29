<script setup lang="ts">
import { isBlogRouteRecord } from '~/utils'

const router = useRouter()
const route = useRoute()

const blogRoutes = router.getRoutes().filter(isBlogRouteRecord)
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
    <div>
      <h1 text-5xl inline>
        Blog
      </h1>
      <span v-if="tag" text-xl text-gray>
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
        <div text-2xl text-gray-400>
          走错地方了，我猜 🤔
        </div>
      </template>
    </div>
  </div>
</template>
