<template>
  <main
    p="x-4 t-16 b-12"
    space-y-12
    mx-auto
    container
    w="md:7/10 lg:3/5 xl:2/5"
    text="gray-700 dark:gray-200"
  >
    <div>
      <router-view />
    </div>
    <div pt-8>
      <Footer />
    </div>
  </main>
</template>
