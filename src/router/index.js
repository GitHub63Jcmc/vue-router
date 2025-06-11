import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/courses/:courses',
      name: 'courses',
      component: () => import('../views/CouseShowView.vue'),
    },
    {
      path: '/nosotros',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
