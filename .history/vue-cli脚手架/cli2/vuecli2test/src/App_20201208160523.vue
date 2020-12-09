<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <banner/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import banner from './banner/banner';
import Banner from './banner/banner.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    banner
    Banner
  },
};
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
