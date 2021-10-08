<template>
    <div id="app">
        <div style="width:100%;height:550px;border:#ccc solid 1px;font-size:12px" id="map"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import $ from 'jquery'
import Mp from 'map'
export default {
    data () {
        return {
            
        }
    },
    mounted(){
    this.$nextTick(function(){  
        var _this = this; 
        var MP =new MP(_this.ak).then(BMap => {  
          var map = new BMap.Map("allmap");
          var point = new BMap.Point(经纬度,经纬度);
          map.centerAndZoom(point, 19);
          var marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);              // 将标注添加到地图中

          var label = new BMap.Label("公司名字",{offset:new BMap.Size(20,-10)});
          label.setStyle({
                  borderColor : "black"
                  
              });
          //marker.addEventListener("click", function(){    //点击弹出可去掉注释      
              marker.setLabel(label); //开启信息窗口
          //});  //点击弹出可去掉注释         

        })
      })
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>