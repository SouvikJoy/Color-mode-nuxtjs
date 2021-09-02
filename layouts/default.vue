<template>
  <div id="App" class="bg-gray-200 dark:bg-gray-900">
    <header class="fixed w-screen dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-80 bg-gray-500">
      <TheHeader />
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="bg-gray-200 dark:bg-gray-900">
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
export default {
  name: 'Default',
  components: { TheFooter, TheHeader }
}
</script>

<style lang="scss">

</style>
