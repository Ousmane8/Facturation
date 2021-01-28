<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      chartData: {
        labels: ["2012",	"2013",	"2014",	"2015",	"2016",	"2017",	"2018", "2019", "2020", "2021"],
        datasets: [
          {
            label: 'Microsoft',
            data: [600,	1150,	342,	6050,	2522,	3241,	1259,	157,	1545, 9841],
            fill: false,
            borderColor: '#DB663C',
            backgroundColor: '#DB663C',
            borderWidth: 1
          },
          {
            label: 'Apple',
            data: [200,	2150,	542,	7050,	4522,	2241,	3259,	457,	5545, 10841],
            fill: false,
            borderColor: '#3cae68',
            backgroundColor: '#3cae68',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
