import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__, props.name)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `/${props.name}` : '/',
    mode: 'history',
    routes
  });
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  Vue.mixin({
    mounted () {},
    created () {
      this['$appVuex'] = props.store
    },
    methods: {
      $appRoutePush (params) {
        props.router.push(params)
      }
    },
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#appSubA');
}

window.__POWERED_BY_QIANKUN__ || render()
export async function bootstrap(props = {}) {
  console.log('vue app bootstraped', props);
}

export async function mount(props) {
  render(props)
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}