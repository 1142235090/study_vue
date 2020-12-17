<template>
  <div id="app">
    <!-- router-link是router注册过的全局组件，到最后会被渲染成a标签 -->
    <!-- <router-link to="/home" tag="li" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" replace active-class="active">关于我们</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于我们</button>
    <button @click="userClick">用户</button>

    <keep-alive exclude="user">
      <!-- 一旦上边触发了url改变，就会将指定组件的view显示到router-view位置 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'ChriseWarnner'
    }
  },
  methods: {
    homeClick(){
      //$router是vue定义的data对象
      // this.$router.push('/home')
      //禁止返回的选项
      if (this.$route.path !== '/home') {
        this.$router.replace('/home')
      }
    },
    aboutClick(){
      //  this.$router.push('/about')
       this.$router.push('/about')
    },
    userClick(){
      //  this.$router.push('/about')
      if (this.$route.path !== '/user/'+this.userId) {
        this.$router.replace('/user/'+this.userId)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: red;
}
</style>
