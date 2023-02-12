<template>
  <ul class="contact-list">
    <li class="contact-preview" v-for="contact in contacts" :key="contact._id">
      <RouterLink :to="`/contact/${contact._id}`">
      <v-icon class="remove-btn" height="40px" name="io-close" @click.stop="onRemoveContact(contact._id)" />
      <ContactPreview :contact="contact"/>
    </RouterLink>
    </li>
  </ul>
</template>

<script>
import ContactPreview from "./contact-preview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
  methods:{
    onRemoveContact(contactId) {
        this.$emit('remove' , contactId)
    }
  }
};
</script>

<style>
</style>