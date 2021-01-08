import './public-path';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import microApps from './util/microApps'

Vue.config.productionTip = false;

const actions = microApps({ store, router, Vue })
Vue.prototype.$onGlobalStateChange = actions.onGlobalStateChange
Vue.prototype.$setGlobalState = actions.setGlobalState

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#appMain')
