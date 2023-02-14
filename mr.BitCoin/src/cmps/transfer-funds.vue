<template>
    <form @submit.prevent="onSaveTransfer" class="transfer-funds">
      <label for="amount">Amount to send</label>
      <input type="number" id="amount" v-model="transfer.amount" />
      <button>Send</button>
    </form>
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
        if(this.transfer.amount === 0) return
        await userService.transferFunds(this.transfer)
        this.$emit('loadTransfers')
        this.transfer.amount = 0 
      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>

<style>
</style>
