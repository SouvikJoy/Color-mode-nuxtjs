<template>
  <div class="flex justify-around place-items-center p-4">
    <nuxt-link to="/">
      <img src="~/assets/icons/logo.svg" alt="">
    </nuxt-link>
    <div>
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/portfolio">
        Portfolio
      </nuxt-link>
      <nuxt-link to="/skills">
        Skills
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

</style>
