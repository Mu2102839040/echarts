<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <heade />
    <router-view />
    <foot />
  </div>
</template>

<script>
import foot from "./components/foot";
import heade from "./components/heade";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    foot,
    heade
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
