import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home/IndexPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    {
      path: '/recommend',
      name: 'recommendPage',
      component: () => import('../views/recommend/IndexPage.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/history/IndexPage.vue')
    },
    {
      path: '/scrollPlay',
      name: 'scrollPlay',
      component: () => import('../views/scrollPlay/IndexPage.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/movie/IndexPage.vue')
    },
    {
      path: '/videoPlay',
      name: 'videoPlay',
      component: () => import('../views/VideoPlay.vue')
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: () => import('../views/home/searchPage.vue')
    }
  ]
})

export default router
