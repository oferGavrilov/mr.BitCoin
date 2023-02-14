<template>
  <div class="stats">
    <LastMonthStats />
    <AvgMonth />
  </div>
</template>

<script>
import LastMonthStats from "../cmps/last-month-stats.vue"
import AvgMonth from "../cmps/stats-avg-months.vue"

export default {
  components: {
    LastMonthStats,
    AvgMonth,
  },
}
</script>