import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../pages/home.vue'

const routerOption = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
}

const router = createRouter(routerOption)

export default router
