import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vvvvvvvv',
    component: Home
  },
  {
    path: '/about',
    name: 'uuuuuuuu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || 'vue3'
  next()
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
