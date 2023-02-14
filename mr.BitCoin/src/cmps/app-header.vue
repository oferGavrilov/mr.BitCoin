<template>
  <header class="app-header">
    <div class="main-container">
      <div class="header-content">
        <div class="logo flex">
          <img src="/img/logo.png" alt="" />
          <h2>Mr.Bitcoin</h2>
        </div>
        <nav v-if="loggedInUser">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/contact">Contacts</RouterLink>
          <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { userService } from "../services/user.service";
export default {
  props: ["user"],
  data() {
    return {
      loggedInUser:this.user
    }
  },
  created() {
    const user = userService.getUser();
    if(user) this.loggedInUser = user
  },
};
</script>

<style>
</style>