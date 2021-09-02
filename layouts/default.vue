<template>
  <div id="App" class="bg-gray-200 dark:bg-gray-900">
    <header class="dark:bg-black bg-gray-500">
      <TheHeader />
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="dark:bg-black bg-gray-500">
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
