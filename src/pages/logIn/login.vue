<template>
  <div id="App">
    <heade />
    <div id="connect">
      <form>
        <h3>个人信息:</h3>账户:
        <input type="text" placeholder="请输入用户名" class="zh" />
        <br />密码:
        <input type="password" placeholder="请输入密码" class="zh" />
        <br />
        <navigator url="localhost:8080/?#/second">
          <button id="bt">提交</button>
        </navigator>
      </form>
    </div>

    <foot />
  </div>
</template>
<script>
import heade from "../components/heade";
import foot from "../components/foot";
export default {
  components: {
    heade,
    foot
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>