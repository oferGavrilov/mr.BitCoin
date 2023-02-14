<template>
<div class="chart-container">
  <Bar v-if='chartData.labels' id="my-chart-id" :options="chartOptions" :data="chartData" />
</div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js"

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Value (USD)",
            backgroundColor: "#f7931a99",
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  
  async created() {
    this.prices = await bitcoinService.getMarketPriceHistory()
    this.values = this.prices.values.splice(120)
    this.chartData.labels = this.values.map(value => {
      const date = new Date(value.x * 1000)
       return `${date.getDate() + 1}.${date.getMonth() + 1}` 
        })
    this.chartData.datasets[0].data = this.values.map(value => value.y)
  },
};
</script>