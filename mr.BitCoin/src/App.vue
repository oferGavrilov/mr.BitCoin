<script>
import AppHeader from "@/cmps/app-header.vue";
import AppFooter from "@/cmps/app-footer.vue";
import { userService } from './services/user.service';

export default {
  data() {
    return{
      user: null
    }
  },
  methods:{
    setUser() {
      this.user = userService.getUser()
    }
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div>
    <AppHeader :user="user"/>
    <main class="main-container">
      <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'slide-fade'">
          <component :is="Component" @setUser="setUser" />
        </transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="css">
  /* .slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;

} */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(30px);
  opacity: 0;
}
</style>

