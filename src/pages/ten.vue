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
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '语文' },
         { value: 935, name: '地理' },
        { value: 735, name: '数学' },
        { value: 580, name: '英语' },
        { value: 484, name: '物理' },
        { value: 300, name: '化学' }
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