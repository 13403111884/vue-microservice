import { createRouter, createWebHistory } from "vue-router";
import routerFiles from 'globby!/@m/**/*.router.*'

const routers: any = Object.values(routerFiles).reduce((modules: any, module: any) => {
  modules = [
    ...modules,
    ...module
  ]
  return modules
}, [])

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: '首页', icon: 'md-apps', show: true, roles: [] },
    component: () => import("./../views/Home.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    meta: { title: '设置', icon: 'md-apps', show: true, roles: [] },
    component: () => import("./../views/Setting.vue"),
  },
  ...routers
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || 'vue3'
  next()
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router