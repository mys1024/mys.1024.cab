<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <footer>
    <div
      space-x-2
      text-xl
      text-gray
    >
      <router-link
        to="/"
        title="首页"
        i-carbon-home
        text-btn
        inline-block
      />
      <button
        title="切换主题"
        :class="{
          'i-carbon-moon': isDark,
          'i-carbon-sun': !isDark,
        }"
        class="!outline-none"
        text-btn
        @click="toggleDark()"
      />
      <a
        i-carbon-logo-github
        text-btn
        inline-block
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
  </footer>
</template>
