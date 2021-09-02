<template>
  <div class="grid place-items-center h-screen">
    <div class="index-2 xl:h-screen">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 place-items-center xl:h-screen">
          <div>
            <img src="~/assets/about.jpg" alt="">
          </div>
          <div class="p-4">
            <div class="about_desc">
              Read About Me
            </div>
            <div class="about_heading_big dark:text-light-text">
              About Me
            </div>
            <p class="about_desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            </p>
            <div class="grid md:grid-cols-2">
              <div>
                <p class="about_heading dark:text-light-text">
                  Educational Skills
                </p>
                <p class="about_desc">
                  Lorem ipsum dolor sit amet, onecis et mollis ipsum dolor sit amet, onecis et mollis..
                </p>
              </div>
              <div>
                <p class="about_heading dark:text-light-text">
                  My Strategies
                </p>
                <p class="about_desc">
                  Lorem ipsum dolor sit amet, onecis et mollis.
                </p>
              </div>
              <div>
                <p class="about_heading dark:text-light-text">
                  Development Skills
                </p>
                <p class="about_desc">
                  Lorem ipsum dolor sit amet, onecis et mollis.
                </p>
              </div>
              <div>
                <p class="about_heading dark:text-light-text">
                  My Qualities
                </p>
                <p class="about_desc">
                  Lorem ipsum dolor sit amet, onecis et mollis ipsum dolor sit amet, onecis et mollis..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  head () {
    return {
      title: 'Portfolio'
    }
  }
}
</script>

<style scoped>

</style>
