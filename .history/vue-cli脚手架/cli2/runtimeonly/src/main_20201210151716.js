import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //直接render变成了虚拟dom然后变成UI
  render: h => h(App)
  // =>语法相当于
  // render:function(h){
  //   return h(App)
  // }

  // 这里主要是将id为app的dom节点，替换成参数APP的内容（就是下方方法的h2），参数h是个function可以把
  // h方法其实就是这个方法：
  // createElement（'h2',{class:'box'},['hello world!']）
  // 第一个参数是标签，第二个是属性，第三个是内容
})
