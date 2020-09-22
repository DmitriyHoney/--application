import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    name: 'register',
    path: '/register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    name: 'categories',
    path: '/categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    name: 'detail-record',
    path: '/detail-record',
    meta: {layout: 'main'},
    component: () => import('../views/DetailRecord.vue')
  },
  {
    name: 'history',
    path: '/history',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    name: 'planing',
    path: '/planing',
    meta: {layout: 'main'},
    component: () => import('../views/Planing.vue')
  },
  {
    name: 'profile',
    path: '/profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    name: 'record',
    path: '/record',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
