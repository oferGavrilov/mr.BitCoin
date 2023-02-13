<template>
<div class="contact-filter">
    <input 
        type="text"
        v-modal="filter.term"
        placeholder="search"
        @input="onFilter"

    />
</div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onFilter({ target }) {
      const { value } = target
      this.$emit('setFilter', {term: value})
    },
  } 
}
</script>