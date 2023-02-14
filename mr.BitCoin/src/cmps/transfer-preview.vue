<template>
  <section class="transfer-preview">
    <h4>At: {{transfer.at}}</h4>
    <h4>Amount: {{transfer.amount}}</h4>
  </section>
</template>

<script>
export default {
  props: ["transfer"],
  created() {
    console.log(this.transfer)
  }
};
</script>
