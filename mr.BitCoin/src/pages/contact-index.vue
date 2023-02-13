<template>
<div>
      <ContactFilter :filter="filter" @setFilter="setFilter" />
      <ContactList v-if="contacts" :contacts="contacts" @remove="onRemoveContact" />
</div>
</template>

<script>
import ContactList from "../cmps/contact-list.vue"
import ContactFilter from "../cmps/contact-filter.vue"

export default {
  data() {
    return {
      contacts: null,
      filter: {term: ''},

    }
  },
  async created() {
    await this.$store.dispatch('loadContacts')
    this.contacts = this.$store.getters.contacts
  },
  components: {
    ContactList,
    ContactFilter
  },
  methods: {
    async onRemoveContact(contactId) {
      try {
        await this.$store.dispatch('removeContact', contactId)
      } catch (err) {
        console.log('err:', err)
      }
    },
    async setFilter(filter) {
      try {
        this.filter = filter
        await this.$store.dispatch('loadContacts', filter)
        this.contacts = this.$store.getters.contacts
      } catch (err) {
        console.log('err:', err)
      }
    }
  },
}
</script>
