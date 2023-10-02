import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DailyView from '../views/DailyView.vue'
import MonthlyView from '../views/MonthlyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/daily',
      name: 'daily',
      component: DailyView
    },
    {
      path: '/monthly',
      name: 'monthly',
      component: MonthlyView
    }
  ]
})

export default router
