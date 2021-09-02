<template>
  <div>
    <div class="index h-screen bg-cover bg-no-repeat bg-right" :style="{ backgroundImage: `url(${require('~/assets/bg-image.jpg')})` }">
      <div class="container mx-auto py-72">
        <h1 class="hello">
          Hello
        </h1>
        <h2 class="name">
          I'm <span>Nat Doe</span>
        </h2>
        <h3 class="designation">
          UI/UX Designer & Frontend Web Developer
        </h3>
        <p class="desc">
          I’m working on a professional, visually sophisticated and technologically
          proficient
        </p>
        <button class="down_button">
          Download CV
        </button>
      </div>
    </div>
    <div class="index-2 h-screen">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 place-items-center h-screen">
          <div>
            <img src="~/assets/about.jpg" alt="">
          </div>
          <div>
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
            <div class="grid grid-rows-2">
              <div class="grid grid-cols-2">
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
              </div>
              <div class="grid grid-cols-2">
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
    <div class="index-3 grid place-items-center h-screen text-center bg-light-text">
      <div class="max-w-5xl mx-auto">
        <p class="about_heading_big">
          Projects Handled So Far
        </p>
        <p class="about-desc">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look even
          slightly believable. If you are going to use a passage of Lorem Ipsum,
        </p>
        <div class="grid grid-cols-3 place-items-center">
          <div v-for="(item, index) in 3" :key="index">
            <project-card-view />
          </div>
        </div>
      </div>
    </div>
    <div class="index-4 h-screen">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 place-items-center h-screen">
          <div>
            <BarChart :data="barChartData" :options="barChartOptions" :height="400" />
          </div>
          <div>
            <div class="about_heading_big dark:text-light-text">
              Skills
            </div>
            <p class="about_desc">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour
            </p>
            <div class="grid grid-cols-3">
              <div v-for="(skill, index) in 6" :key="index">
                <div class="p-4">
                  <p class="text-2xl dark:text-light-text">
                    HTML
                  </p>
                  <p class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, onecis et mollis ipsum dolor sit amet, onecis et mollis..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardView from '~/components/ProjectCardView'
import BarChart from '~/components/BarChart'

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}
export default {
  name: 'Index',
  components: {
    BarChart,
    ProjectCardView
  },
  data () {
    return {
      barChartData: {
        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'BOOTSTRAP', 'VUE', 'NUXT.JS', 'LARAVEL'],
        datasets: [
          {
            label: 'Skills Acquired',
            backgroundColor: [chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue, chartColors.yellow, chartColors.purple, chartColors.orange],
            data: [10, 15, 20, 25, 30, 70, 50, 10]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Skills',
          fontSize: 24
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 1
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
