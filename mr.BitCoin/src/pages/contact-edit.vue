<template>
  <form v-if="contact" class="contact-details">
    <input 
        type="text" 
        v-model="contact.name"
        placeholder="Enter contact name..."
    />
    <input 
        type="text"
        v-model="contact.email"
        placeholder="Enter contact email..."
    />
    <input 
        type="text"
        v-model="contact.phone"
        placeholder="Enter contact number..."
    />
    <RouterLink to="/contact">
        <button>Back</button>
    </RouterLink>
  </form>
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
    const { contactId } = this.$route.params
    console.log('contactId:', contactId)
    if(contactId) this.contact = await contactService.getContactById(contactId)
    else this.contact = contactService.getEmptyContact()
    console.log('this.contact:', this.contact)
  },
}
</script>