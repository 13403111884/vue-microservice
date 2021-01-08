import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vvvvvvvv',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'uuuuuuuu',
    component: () => import('../views/About.vue')
  }
]

export default routes
