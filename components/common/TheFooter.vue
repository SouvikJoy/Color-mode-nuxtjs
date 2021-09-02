<template>
  <div class="flex justify-around place-items-center p-4">
    <div class="dark:text-white">
      {{ new Date().getFullYear() }} — <strong>Portfolio</strong>
    </div>
    <div>
      <ColorModePicker />
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
