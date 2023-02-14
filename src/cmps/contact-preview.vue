<template>
  <article>
    <span>{{ contact.name }}</span>
    <!-- <span>Email: {{ contact.email }}</span>
    <span>Phone: {{ contact.phone }}</span> -->
    <img :src="'https://robohash.org/' + contact.name" alt="" />
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>