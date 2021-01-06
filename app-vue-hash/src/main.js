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
  console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `/${appData.name}` : '/',
    mode: 'history',
    routes
  });
  Vue.mixin({
    data(){
      return {}
    },
    computed: {
      $appVuex: () => appData.store,
      $appVuexGetters: () => appData.store.getters.parent
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
  }).$mount('#appVueHash');
}

window.__POWERED_BY_QIANKUN__ || render()
export async function bootstrap(props = {}) {
  console.log('vue app bootstraped', props);
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}