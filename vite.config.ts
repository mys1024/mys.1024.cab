/// <reference types="vitest" />

import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import anchor from 'markdown-it-anchor'
import uslug from 'uslug'
// @ts-expect-error This package doesn't export types
import lazyLoading from 'markdown-it-image-lazy-loading'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: 'pages',
      extensions: ['vue', 'md'],
      exclude: ['**/README.md', '**/_internal.*', '**/_internal/*'],
      extendRoute(route) {
        const componentPath = path.resolve(__dirname, route.component.slice(1))
        // 将 markdown 页面中的 frontmatter 放入对应 route 的 meta 中
        if (componentPath.endsWith('.md')) {
          const md = fs.readFileSync(componentPath, 'utf-8')
          const { data: frontmatter } = matter(md)
          route.meta = Object.assign(route.meta || {}, frontmatter)
        }
        return route
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vitest',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/^README.md$/i],
      dts: true,
    }),

    // https://github.com/antfu/unocss
    Unocss({
      shortcuts: [
        ['text-btn', 'cursor-pointer transition duration-200 hover:text-#9AC8A0 dark:hover:text-orange-300'],
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        md.use(anchor, {
          slugify: s => uslug(s),
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '←',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })
        md.use(lazyLoading, {
          image_size: true,
          base_path: `${path.resolve(__dirname, 'public')}/`,
        })
      },
      markdownItOptions: {
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value
            }
            catch (err) {
              console.error(err)
            }
          }
          return ''
        },
      },
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
