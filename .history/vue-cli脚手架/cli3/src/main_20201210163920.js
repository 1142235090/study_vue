import Vue from 'vue'
import App from './App.vue'

//提示信息开关
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')//mount就是vue的el，之前el也是调用的这个方法
