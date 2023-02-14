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
import { utilService } from '../services/util.service.js';

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
        }
    },
    methods: {
        getMonthAvg(values) {
            const sum = values.reduce((acc, value) => acc + value.y, 0)
            return sum / values.length
        },
        getMonthName(values) {
            return values.reduce((acc, value) => {
                const date = new Date(value.x * 1000)
                if(!acc.includes(utilService.getMonthName(date))) acc.push(utilService.getMonthName(date))
                return acc
            }, [])
        },
        updateDate(values) {
            let saveIdx = 0
            let prevDate = new Date(values[saveIdx].x * 1000)
            this.chartData.datasets[0].data = values.reduce((acc, value, idx) => {
                    const date = new Date(value.x * 1000)
                    if(prevDate.getMonth() !== date.getMonth()) {
                        const avg = this.getMonthAvg(values.slice(saveIdx, idx))
                        prevDate = new Date(value.x * 1000)
                        saveIdx = idx
                        acc.push(avg)
                    }
                    return acc
                }, [])
                this.chartData.datasets[0].data.push(this.getMonthAvg(values.slice(saveIdx)))
            }
    },
    async created() {
        this.prices = await bitcoinService.getMarketPriceHistory()
        this.chartData.labels = this.getMonthName(this.prices.values)
        this.updateDate(this.prices.values)
    },
    }
</script>