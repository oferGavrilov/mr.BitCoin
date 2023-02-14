<template>
  <section class="transfer-list">
    <h2>Trade history</h2>
    <ul v-if="transfers">
      <li v-for="(transfer, idx) in transfers" :key="idx">
        <transfer-preview :transfer="transfer" />
      </li>
    </ul>
  </section>
</template>

<script>
import TransferPreview from "./transfer-preview.vue";
export default {
  props: ["transfers"],
  components: { TransferPreview },
};
</script>

<style>
</style>