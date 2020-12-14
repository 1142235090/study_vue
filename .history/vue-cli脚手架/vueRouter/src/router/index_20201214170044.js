import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'

//1.引入模块儿，安装插件
Vue.use(Router)

//2.创建Router对象，并且导出供mainjs使用
export default new Router({
  //当前活跃模块class
  linkActiveClass:'active',
  //修改模式使用history方式
  mode:'history',
  //在这里配置路由和组件之间的应用关系
  routes: [
    {
      //界面默认显示哪个组件信息
      path: '',
      redirect:'/home' 
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})


