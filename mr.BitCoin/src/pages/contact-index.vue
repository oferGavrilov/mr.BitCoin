<template>
  <ContactList v-if="contacts" :contacts="contacts" @remove="onRemoveContact" />
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from "../cmps/contact-list.vue";
export default {
  data() {
    return {
      contacts: null,
      filterBy: { term: "" },
    };
  },
  async created() {
    this.contacts = await contactService.getContacts();
  },
  components: {
    ContactList,
  },
  methods: {
    async onRemoveContact(contactId) {
        await contactService.deleteContact(contactId)
        const idx = this.contacts.findIndex(contact => contact._id === contactId)
        this.contacts.splice(idx, 1)
    },
  },
};
</script>

<style>
</style>