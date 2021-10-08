<template>
    <div id="app">
        <div id="main"></div>
    </div>
</template>
<script>
  import * as echarts from 'echarts';
export default {
    data () {
        return {
            
        }
    },
    mounted () {
      

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '语文' },
        { value: 38, name: '数学' },
        { value: 32, name: '历史' },
        { value: 30, name: '地理' },
        { value: 28, name: '物理' },
        { value: 26, name: '生物' },
        { value: 82, name: '化学' },
        { value: 18, name: '英语' }
      ]
    }
  ]
};

option && myChart.setOption(option);

    }
}
</script>
<style scoped>
#main{
    width: 100%;
    height: 800px;
    border: 1px solid red;
}
</style>