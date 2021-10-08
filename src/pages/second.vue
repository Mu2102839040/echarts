<template>
  <div id="app">
    <heade />
    <h3>数量:{{n}}</h3>
    <h3>单价:{{price}}</h3>
    <h3 v-if="show">总价:{{totle}}</h3>
    <foot />
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      n: 4,
      price: 3.5,
      show: true
    };
  },
  computed: {
    totle() {
      return this.n * this.price;
    }
  }
};
</script>