<template>
  <div id="app">
    <h2>用户子组件{{userId}}</h2>
    <h2>年龄{{age}}</h2>
    <h2>喜欢{{like}}</h2>
  </div>
</template>

<script>
export default {
  name: 'userson',
  //钩子函数，界面加载完成后
  computed: {
    userId(){
      //$route当前处于活跃的路由
      return this.$route.params.userId
    },
    age(){
      //$route当前处于活跃的路由
      console.log(this.$route);
      return this.$route.query.age
    },
    like(){
      //$route当前处于活跃的路由
      return this.$route.query.like
    }
  }
}
</script>

<style scoped>

</style>
