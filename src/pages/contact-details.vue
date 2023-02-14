<template>
  <article v-if="contact" class="contact-details">
    <span>Name: {{ contact.name }}</span>
    <span>Email: {{ contact.email }}</span>
    <span>Phone: {{ contact.phone }}</span>
    <img :src="'https://robohash.org/' + contact.name" alt="" />
    <RouterLink to="/contact">
      <button>Back</button>
    </RouterLink>
    <TransferFunds :contact="contact" @loadTransfers="loadTransfers" />
    <TransferList :transfers="transfers"/>
  </article>
</template>

<script>
import TransferFunds from "../cmps/transfer-funds.vue";
import TransferList from "../cmps/transfer-list.vue";
import { contactService } from "../services/contact.service";
import { userService } from '../services/user.service';
export default {
  data() {
    return {
      contact: null,
      transfers: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params
    this.contact = await contactService.getContactById(contactId)
    this.loadTransfers()
  },
  methods: {
    loadTransfers() {
      let transfers = userService.getTransactions()
      transfers = transfers.filter((transfer) => transfer.toId === this.contact._id)
      this.transfers = transfers
    },
  },
  components: { TransferFunds, TransferList },
};
</script>

