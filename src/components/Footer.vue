<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav>
    <div
      space-x-2
      text-xl
    >
      <button
        text-btn
        opacity-60
        hover:opacity-100
        class="!outline-none"
        @click="toggleDark()"
      >
        <div v-if="isDark" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>
      <a
        text-btn
        text-xl
        inline-block
        text-gray
        i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/mys1024"
        target="_blank"
        title="GitHub"
      />
    </div>
    <div>
      <span text-sm text-gray>
        <a
          rel="noreferrer"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          title="CC BY-NC-SA 4.0"
          text-btn
        >
          CC BY-NC-SA 4.0
        </a>
        © 2021 Mys1024
      </span>
    </div>
  </nav>
</template>
