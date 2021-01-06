import './public-path';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import microApps from './util/microApps'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

microApps({ store, router })
