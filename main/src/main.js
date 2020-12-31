import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'
import API from './api'
import './assets/index.css'

import { registerMicroApps, start } from 'qiankun'

createApp(App).use({
  install: (vue) => {
    vue.config.productionTip = false
    vue.config.globalProperties.api = API
  }
}).use(router).use(store).mount('#app')

registerMicroApps([
  { 
    name: 'app-vue-hash',
    href: '/app-vue-hash',
    entry: 'http://localhost:1111',
    container: '#appContainer',
    activeRule: '/app-vue-hash', 
    props: { appData: { store, router, base: '/app-vue-hash' } }
  },
  { 
    name: 'app-vue-history',
    href: '/app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer',
    activeRule: '/app-vue-history',
    props: { appData: { store, router, base: '/app-vue-history' } }
  },
],{
  beforeLoad: [app => console.log('加载前', app)],
  beforeMount: [app => console.log('挂载前', app)],
  afterUnmount: [app => console.log('挂载后', app)],
  afterMount: [app => console.log('卸载前', app)],
  beforeUnmount: [app => console.log('卸载后', app)]
})

start({
  // 自定义的子应用请求方法
  // fetch: (url) => {}
})
