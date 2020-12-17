import Vue from 'vue'
import Router from 'vue-router'


//1.引入模块儿，安装插件
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//2.创建Router对象，并且导出供mainjs使用
const router = new Router({
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
      name: '关于我们',
      component: () => import('@/components/About')
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@/components/Home')
    },
    {
      path: '/user/:userId',
      name: '用户',
      component: () => import('@/components/User'),
      children:[
        {
          //界面默认显示哪个组件信息
          path: '',
          redirect:'/user/son/:userId' 
        },{
          path: '/user/son/:userId',
          name: '用户子界面',
          component: () => import('@/components/UserSon'),
      }]
    }
  ]
})

//导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].name//to为跳转到的route，from为从哪里跳转的route
  next(); //是一个迭代器，需要调用next才可以继续往下执行，必须调用此方法否则会导致路由不能跳转界面
})

export default router;


