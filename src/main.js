import Vue from 'vue'
import App from './App.vue'
import './permission.js'
import router from '@/router'
import store from '@/store/store'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/icons'
Vue.config.productionTip = false

// register global utility filters.
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
