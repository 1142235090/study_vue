import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/About.vue'

//1.引入模块儿，安装插件
Vue.use(Router)

//2.创建Router对象，并且导出供mainjs使用
export default new Router({
  //在这里配置路由和组件之间的应用关系
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})


