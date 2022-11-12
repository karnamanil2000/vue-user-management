import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '../views/PageNotFound.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
