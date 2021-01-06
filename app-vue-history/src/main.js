import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(appData = {}) {
  console.log('appDataappDataappDataappData', appData)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `/${appData.name}` : '/',
    mode: 'history',
    routes,
  });
  Vue.mixin({
    data(){
      return {
        $appVuex: appData.store,
      }
    },
    methods: {
      $appRoutePush (params) {
        appData.router.push(params)
      }
    },
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#appVueHistory');
}

window.__POWERED_BY_QIANKUN__ || render()
export async function bootstrap(props = {}) {
  console.log('vue app bootstrap', props);
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ""
  instance = null
  router = null
}
