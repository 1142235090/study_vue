<template>
  <div id="app">
    //router-link是router注册过的全局组件，到最后会被渲染成a标签
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于我们</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
