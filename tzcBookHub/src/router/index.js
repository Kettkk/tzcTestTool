import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PhoneHomeView',
      component: () => import('../views/PhoneHomeView.vue')
    },
    {
      path: '/PCHome',
      name: 'PCHomeView',
      component: () => import('../views/PCHomeView.vue')
    }
  ]
})

export default router
