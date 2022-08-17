import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)


import router from './router.js'
import store from './store.js'



//响应式系统
new Vue({
  // model:history,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
