<template>
  <div class="grid place-items-center h-screen text-center">
    <div>
      <p class="text-6xl font-extrabold dark:text-light-text">
        Souvik Joy
      </p>
      <hr>
      <p class="pt-4 dark:text-light-text">
        <span class="font-bold">
          Email:
        </span> souviksahajoy@gmail.com
      </p>
      <p class="dark:text-light-text">
        <span class="font-bold">
          Contact:
        </span> +88017123456789
      </p>
      <p class="dark:text-light-text">
        <span class="font-bold">
          Address:
        </span>
        109/5, Hatembag, East Rayer Bazar, Dhaka - 1209
      </p>
      <div class="flex place-items-center justify-center">
        <input type="text" placeholder="Your Email Here" class="mr-6 rounded-2xl py-2 px-4 outline-none">
        <button class="py-2 px-4 bg-green-500 rounded-2xl text-sm text-white">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head () {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style scoped>

</style>
