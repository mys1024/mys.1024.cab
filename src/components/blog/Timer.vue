<script lang="ts" setup>
import dayjs from 'dayjs'

const startTime = '2021-12-29T18:49:38.312Z'
const startTimestamp = dayjs(startTime).unix()

const days = ref('')
const hours = ref('')
const minutes = ref('')
const seconds = ref('')

const updateTimer = () => {
  let elapsed = dayjs().unix() - startTimestamp
  const d = Math.floor(elapsed / 86400)
  elapsed -= d * 86400
  days.value = `${d}`
  const h = Math.floor(elapsed / 3600)
  elapsed -= h * 3600
  hours.value = (h < 10 ? '0' : '') + h
  const m = Math.floor(elapsed / 60)
  elapsed -= m * 60
  minutes.value = (m < 10 ? '0' : '') + m
  const s = Math.floor(elapsed)
  seconds.value = (s < 10 ? '0' : '') + s
}

updateTimer()
setInterval(() => {
  updateTimer()
}, 1000)
</script>

<template>
  <div space-x-2 text-xl font-bold>
    <span text-blue>{{ days }}</span>
    <span text-blue-gray>日</span>
    <span text-blue>{{ hours }}</span>
    <span text-blue-gray>时</span>
    <span text-blue>{{ minutes }}</span>
    <span text-blue-gray>分</span>
    <span text-blue>{{ seconds }}</span>
    <span text-blue-gray>秒</span>
  </div>
</template>
