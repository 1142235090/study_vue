<template>
  <div id="app">
    <h2>用户{{ userId }}</h2>
    <button @click="userClick">用户子组件</button>
    <!-- <router-link :to="{path:'/user/son/'+userId,query:{age:18,like:'krisWu'}}"><button>用户子组件</button></router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  methods: {
    userClick() {
      this.$router.push({
        path: "/user/son/" + this.userId,
        query: {
          age: 18,
          like: "krisWu",
        },
      });
    },
  },
  //钩子函数，界面加载完成后
  computed: {
    userId() {
      //$route当前处于活跃的路由
      return this.$route.params.userId;
    },
  },
  created () {
    console.log("用户组件创建");
  }
};
</script>

<style scoped>
</style>
