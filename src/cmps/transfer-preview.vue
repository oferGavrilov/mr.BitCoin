<template>
  <section class="transfer-preview">
    <h4>At: {{getTime}}</h4>
    <h4>Amount: {{transfer.amount}}</h4>
  </section>
</template>

<script>
import { utilService } from '../services/util.service';
export default {
  props: ["transfer"],
  created() {
    console.log(this.transfer)
  },
  computed: {
    getTime() {
      return utilService.calculateTime(this.transfer.at)
    }
  }
};
</script>
