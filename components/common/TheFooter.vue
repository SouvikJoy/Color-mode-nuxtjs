<template>
  <div>
    <div class="bg-light-text">
      <div class="container mx-auto p-20">
        <div class="grid md:grid-cols-2 xl:grid-cols-5">
          <div class="col-span-2">
            <p class="text-6xl font-extrabold">
              Souvik Joy
            </p>
            <hr>
            <p class="pt-4">
              <span class="font-bold">
                Email:
              </span> souviksahajoy@gmail.com
            </p>
            <p>
              <span class="font-bold">
                Contact:
              </span> +88017123456789
            </p>
            <p>
              <span class="font-bold">
                Address:
              </span>
              109/5, Hatembag, East Rayer Bazar, Dhaka - 1209
            </p>
            <div class="flex place-items-center">
              <input type="text" placeholder="Your Email Here" class="mr-6 rounded-2xl py-2 px-4 outline-none">
              <button class="py-2 px-4 bg-green-500 rounded-2xl text-sm text-white">
                Submit
              </button>
            </div>
          </div>
          <div class="p-9">
            <p class="text-2xl font-bold border-b-2 p-2 mb-2">
              Useful Links
            </p>
            <div class="mb-4">
              <a href="https://www.nuxtjs.org" class="text-black mb-4">NuxtJs</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">VueJs</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">Laravel</a>
            </div>
            <div class="mb-4">
              <a href="https://www.nodejs.org" class="text-black mb-4">NodeJs</a>
            </div>
            <div class="mb-4">
              <a href="https://www.w3school.com" class="text-black">W3School</a>
            </div>
            <div>
              <a href="https://www.debugger.tech" class="text-black">codepen</a>
            </div>
          </div>
          <div class="p-9">
            <p class="text-2xl font-bold border-b-2 p-2 mb-2">
              Global Links
            </p>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">portal.debugger.tech</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">blog.debugger.tech</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">forum.debugger.tech</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black mb-4">support.debugger.tech</a>
            </div>
            <div class="mb-4">
              <a href="https://www.debugger.tech" class="text-black">services.debugger.tech</a>
            </div>
            <div>
              <a href="https://www.debugger.tech" class="text-black">demo.debugger.tech</a>
            </div>
          </div>
          <div class="p-9">
            <p class="text-2xl font-bold border-b-2 p-2 mb-2">
              Local Links
            </p>
            <div>
              <nuxt-link to="/portfolio" class="text-black">
                Portfolio
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/portfolio" class="text-black">
                Skills
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/portfolio" class="text-black">
                Contact
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-around place-items-center p-4">
      <div class="dark:text-white">
        &copy; {{ new Date().getFullYear() }} —
        <strong>
          <a href="https://www.debugger.tech" class="text-black dark:text-white">Debugger.tech</a> |  <span class="pl-4">All Rights Reserved</span>
        </strong>
      </div>
      <div>
        <ColorModePicker />
      </div>
    </div>
  </div>
</template>

<script>
import ColorModePicker from '~/components/ColorModePicker'
export default {
  name: 'TheFooter',
  components: { ColorModePicker }
}
</script>

<style scoped>

</style>
