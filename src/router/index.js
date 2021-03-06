import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/title'
  },
  {
    path: '/title',
    component: () => import('../views/TitlePage.vue')
  },
  {
    path: '/main',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/attendance',
    component: () => import('../views/AttendancePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
