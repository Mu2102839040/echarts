<template>
  <div id="state" style="display:flex">
    <div>
      <ul class="nav" id="side-menu">
        <li>
          <a href="index.html" id="firstNode" class="cur" target="menuFrame">
            <i class="fa fa-bar-chart-o fa-fw"></i>
            <b>统计报表</b>
          </a>
          <ul class="nav nav-second-level">
            <li>
              <a href="import.html" target="menuFrame">进货报表</a>
            </li>
            <li>
              <a href="export.html" target="menuFrame">出货报表</a>
            </li>
            <li>
              <a href="check.html" target="menuFrame">毛利报表</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="warehouse.html" target="menuFrame">
            <i class="fa fa-table fa-fw"></i>
            <b>仓库管理</b>
          </a>
          <ul class="nav nav-second-level">
            <li>
              <a href="goodslist.html" target="menuFrame">商品列表</a>
            </li>
            <li>
              <a href="check.html" target="menuFrame">盘点</a>
            </li>
            <li>
              <a href="outbound.html" target="menuFrame">出库列表</a>
            </li>
            <li>
              <a href="instorage.html" target="menuFrame">入库列表</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-edit fa-fw"></i>
            <b>订单管理</b>
          </a>
          <ul class="nav nav-second-level">
            <li>
              <a href="orderlist.html" target="menuFrame">订单列表</a>
            </li>
            <li>
              <a href="forms.html" target="menuFrame">采购申请</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="system.html" target="menuFrame">
            <i class="fa fa-wrench fa-fw"></i>
            <b>系统设置</b>
          </a>
          <ul class="nav nav-second-level">
            <li>
              <a href="user.html" target="menuFrame">权限设置</a>
            </li>
            <li>
              <a href="personnel.html" target="menuFrame">资料管理</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="rewritepwd.html" target="menuFrame">
            <i class="glyphicon glyphicon-pencil"></i>
            <b>修改密码</b>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <li>
        <a href="#">
          <div class="clearfix">
            <span class="pull-left">Software Update</span>
            <span class="pull-right">65%</span>
          </div>

          <div class="progress progress-mini">
            <div style="width:65%" class="progress-bar"></div>
          </div>
        </a>
      </li>

      <li>
        <a href="#">
          <div class="clearfix">
            <span class="pull-left">Hardware Upgrade</span>
            <span class="pull-right">35%</span>
          </div>

          <div class="progress progress-mini">
            <div style="width:35%" class="progress-bar progress-bar-danger"></div>
          </div>
        </a>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
</style>