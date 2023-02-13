import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../pages/home.vue'
import Statistics from '../pages/statistics.vue'
import Contact from '@/pages/contact-index.vue'
import ContactDetails from '@/pages/contact-details.vue'
import ContactEdit from '@/pages/contact-edit.vue'

const routerOption = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/contact/:contactId',
      component: ContactDetails
    },
    {
      path: '/edit/:contactId?',
      component: ContactEdit
    },
  ]
}

const router = createRouter(routerOption)

export default router
