<template>
  <section class="transfer-funds">
    <form @submit.prevent="onSaveTransfer">
      <label for="amount">Amount to send</label>
      <input type="number" id="amount" v-model="transfer.amount" />
      <button>Send</button>
    </form>
  </section>
</template>

<script>
import { userService } from "../services/user.service";
export default {
  props: ["contact"],
  data() {
    return {
      user: null,
      transfer: null,
    };
  },
  created() {
    this.user = userService.getUser();
    this.transfer = userService.getEmptyTransfer();
    this.transfer.toId = this.contact._id;
    this.transfer.to = this.contact.name;
  },
  methods: {
    async onSaveTransfer() {
      try {
        userService.transferFunds(this.transfer);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>