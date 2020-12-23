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
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router } }
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer', 
    activeRule: '/app-vue-history',
    props: { data : store }
  },
]);

start()
