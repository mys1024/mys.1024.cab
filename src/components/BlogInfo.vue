<script lang="ts" setup>
import { formatDate } from '~/utils'

const props = defineProps<{
  bid: number
  title: string
  time: string
  tags: string[]
  enableLink: boolean
  size: 'normal' | 'large'
}>()
</script>

<template>
  <div>
    <!-- blog title -->
    <div
      :class="{
        'text-2xl mb-1': props.size === 'normal',
        'text-4xl mb-4': props.size === 'large',
      }"
    >
      <router-link
        v-if="props.enableLink"
        :to="`/blog/${props.bid}`"
        text-btn
        transition
        duration-200
      >
        {{ props.title }}
      </router-link>
      <h1 v-else>
        {{ props.title }}
      </h1>
    </div>

    <!-- blog meta -->
    <div
      :class="{
        'text-sm': props.size === 'normal',
        'text-base': props.size === 'large',
      }"
      space-x-4
      text-gray-400
    >
      <span>{{ formatDate(props.time) }}</span>
      <span space-x-2>
        <router-link
          v-for="tag in props.tags"
          :key="tag"
          :to="`/?tag=${tag}`"
          text-btn
        >
          #{{ tag }}
        </router-link>
      </span>
    </div>
  </div>
</template>
