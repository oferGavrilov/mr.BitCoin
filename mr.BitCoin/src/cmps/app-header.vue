<template>
  <header class="app-header">
    <div class="main-container">
      <div class="header-content">
        <div class="logo flex">
          <img src="img/logo.png" alt="" />
          <h2>Mr.Bitcoin</h2>
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/contact">Contacts</RouterLink>
          <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {};
</script>

<style>
</style>