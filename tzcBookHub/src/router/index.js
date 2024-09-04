import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PhoneHomeView',
      name: 'PhoneHomeView',
      component: () => import('../views/PhoneHomeView.vue')
    },
    {
      path: '/PCHomeView',
      name: 'PCHomeView',
      component: () => import('../views/PCHomeView.vue')
    },
    {
      path: '/PhoneSignInView',
      name: 'PhoneSignInView',
      component: () => import('../views/SignInAbout/PhoneSignInView.vue')
    }
  ]
})

export default router
