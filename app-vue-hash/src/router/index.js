import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'eeeeeeee',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'aaaaaaaaa',
    component: () => import('../views/About.vue')
  }
]

export default routes
