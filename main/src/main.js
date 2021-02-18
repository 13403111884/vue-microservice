import './public-path';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import microApps from './util/microApps'
import mainArr from './layout'

Vue.config.productionTip = false;

microApps({ store, router, Vue })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#appMain')
