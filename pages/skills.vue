<template>
  <div class="grid place-items-center h-screen">
    <div class="index-4 xl:h-screen">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 place-items-center xl:h-screen">
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
            <div class="grid md:grid-cols-3">
              <div v-for="(skill, index) in skills" :key="index">
                <div class="p-4">
                  <p class="text-2xl dark:text-light-text">
                    {{ skill }}
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
  name: 'Skills',
  components: { BarChart },
  data () {
    return {
      skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'BOOTSTRAP', 'VUE', 'NUXT.JS', 'LARAVEL'],
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
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        title: {
          display: false,
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
      title: 'Skills'
    }
  }
}
</script>

<style scoped>

</style>
