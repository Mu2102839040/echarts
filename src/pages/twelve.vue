<template>
    <div id="app">
        <div id="main"></div>
    </div>
</template>
<script>
  import * as echarts from 'echarts';
  import $ from 'jquery'
export default {
    data () {
        return {
            
        }
    },
    mounted () {
      
var ROOT_PATH =
  'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
$.get(
  ROOT_PATH + '/data/asset/geo/Veins_Medical_Diagram_clip_art.svg',
  function (svg) {
    echarts.registerMap('organ_diagram', { svg: svg });
    option = {
      tooltip: {},
      geo: {
        left: 10,
        right: '50%',
        map: 'organ_diagram',
        selectedMode: 'multiple',
        emphasis: {
          focus: 'self',
          itemStyle: {
            color: null
          },
          label: {
            position: 'bottom',
            distance: 0,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        },
        blur: {},
        select: {
          itemStyle: {
            color: '#b50205'
          },
          label: {
            show: false,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        }
      },
      grid: {
        left: '60%',
        top: '20%',
        bottom: '20%'
      },
      xAxis: {},
      yAxis: {
        data: [
          '心',
          '大肠',
          '腰',
          '胰脏',
          '肾',
          '肺',
          '肝'
        ]
      },
      series: [
        {
          type: 'bar',
          emphasis: {
            focus: 'self'
          },
          data: [121, 321, 141, 52, 198, 289, 139]
        }
      ]
    };
    myChart.setOption(option);
    myChart.on('mouseover', { seriesIndex: 0 }, function (event) {
      myChart.dispatchAction({
        type: 'highlight',
        geoIndex: 0,
        name: event.name
      });
    });
    myChart.on('mouseout', { seriesIndex: 0 }, function (event) {
      myChart.dispatchAction({
        type: 'downplay',
        geoIndex: 0,
        name: event.name
      });
    });
  }
);

option && myChart.setOption(option);

}}
</script>
<style scoped>
#main{
    width: 100%;
    height: 800px;
    border: 1px solid red;
}
</style>