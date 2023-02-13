<template>
  <article v-if="contact" class="contact-details">
    <span>Name: {{ contact.name }}</span>
    <span>Email: {{ contact.email }}</span>
    <span>Phone: {{ contact.phone }}</span>
    <img :src="'https://robohash.org/' + contact.name" alt="" />
    <RouterLink to="/contact">
        <button>Back</button>
    </RouterLink>
  </article>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params;
    this.contact = await contactService.getContactById(contactId);
  },
}
</script>
