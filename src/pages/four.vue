<template>
  <div id="state">
    <div id="left">
      <Ul>
        <li><a href="">人员管理</a></li>
        <li><a href="">财务管理</a></li>
        <li><a href="">工作管理</a></li>
        <li><a href="">考勤管理</a></li>
      </Ul>
    </div>
    <div id="center">
      <div id="center_ren" v-show="show">人员管理列表</div>
      <div id="center_cai" v-show="show">财务管理列表</div>
      <div id="center_worke" v-show="show">工作管理列表</div>
      <div id="center_kao" v-show="show">考勤管理列表</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:false
    };
  }
};
</script>
<style scoped>
body {
  margin: 0;
}

#stage {
  position: relative;
}

#left {
  /* position: absolute;
  left: 0;
  top: 70; */
  float: left;
  background-color: green;
  width: 200px;
  height: 500px;
}
#center {
  margin-left: 200px;
  background-color: orange;
  height: 500px;
}
#left > ul > li {
  width: 100%;
  height: 40px;
}
#left > ul {
  list-style: none;
}
a{
  text-decoration: none;
  color: #fff;
}
</style>