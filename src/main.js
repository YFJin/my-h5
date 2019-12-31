import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Toast } from 'vant';
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}

Vue.config.productionTip = false

Toast.setDefaultOptions('loading', { forbidClick: true, loadingType: 'spinner', duration: 0 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
