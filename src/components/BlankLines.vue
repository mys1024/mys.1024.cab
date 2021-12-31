<script lang="ts" setup>
const props = defineProps<{
  linage: number
}>()
</script>

<template>
  <div>
    <p v-for="i in props.linage" :key="i">
      <span>&nbsp;</span>
    </p>
  </div>
</template>
