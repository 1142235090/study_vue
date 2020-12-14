import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //3.传入路由配置
  router,
  mode:'history',
  render: h => h(App)
})
