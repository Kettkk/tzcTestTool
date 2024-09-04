import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PhoneHomeView',
      name: 'PhoneHomeView',
      component: () => import('../views/phoneViews/PhoneHomeView.vue')
    },
    {
      path: '/PCHomeView',
      name: 'PCHomeView',
      component: () => import('../views/pcViews/PCHomeView.vue')
    },
    {
      path: '/PhoneSignInView',
      name: 'PhoneSignInView',
      component: () => import('@/views/phoneViews/signInAbout/PhoneSignInView.vue')
    }
  ]
})

export default router
