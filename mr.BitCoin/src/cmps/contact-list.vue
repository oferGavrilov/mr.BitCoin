<template>
  <ul class="contact-list">
    <li class="contact-preview" v-for="contact in contacts" :key="contact._id">
      <v-icon class="remove-btn" height="40px" name="io-close" @click.stop="onRemoveContact(contact._id)" />
      <RouterLink :to='`/edit/${contact._id}`'><v-icon class="edit-btn" height="40px" name="fa-user-edit"/> </RouterLink>
      <div @click="onMovetoDetails(contact._id)">
        <ContactPreview :contact="contact"/>
      </div>
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
    },
    onMovetoDetails(contactId) {
        this.$router.push(`/contact/${contactId}`)
    }
  }
};
</script>

<style>
</style>