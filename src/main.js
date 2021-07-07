import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import XComp from './packages/index';

Vue.use(XComp);

new Vue({
  render: h => h(App),
}).$mount('#app')
