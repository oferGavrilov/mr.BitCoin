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
      filterBy: null,
    }
  },
  async created() {
    await this.$store.dispatch({type: 'loadContacts'})
    this.contacts = this.$store.getters.contacts
    this.filter = this.$store.getters.filter
  },
  components: {
    ContactList,
  },
  methods: {
    async onRemoveContact(contactId) {
      try {
        await this.$store.dispatch('removeContact', contactId)
        // const idx = this.contacts.findIndex(contact => contact._id === contactId)
        // this.contacts.splice(idx, 1)
      } catch (err) {
        console.log('err:', err)
      }
    },
  },
};
</script>

<style>
</style>