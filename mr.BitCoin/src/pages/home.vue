<template>
  <section class="home">
    <h1 v-if="user">Welcome back {{ user.name }}</h1>
    <div class="balance flex">
      <h5>Balance:</h5>
      <h5>${{ user.balance }}</h5>
    </div>
    <div class="rate flex">
      <h5>Rate:</h5>
      <span>{{ rate }}%</span>
    </div>
  </section>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },
  async created() {
    this.user = userService.getUser();
    this.rate = await bitcoinService.getRate();
  },
};
</script>



