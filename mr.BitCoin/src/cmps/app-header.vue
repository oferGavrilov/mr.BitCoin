<template>
  <header class="app-header">
    <h2>Mr.Bitcoin</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </nav>
  </header>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {};
</script>

<style>
</style>