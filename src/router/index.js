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
    // {
    //   path: '/courses',
    //   name: 'courses',
    //   component: () => import('../views/CourseView.vue'),
    // },
    // {
    //   path: '/courses/:courseId',
    //   name: 'courseDetail',
    //   component: () => import('../views/CouseDetailView.vue'),
    // },
    {
      path: '/courses',
      component: () => import('../views/CourseLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'courses',
          component: () => import('../views/CourseView.vue'),
        },
        {
          path: '/:courseId',
          name: 'courseDetail',
          component: () => import('../views/CourseDetailView.vue'),
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/NotFound.vue'), 
    },
  ]
})

export default router


