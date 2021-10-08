<template>
    <div id="app">
        <!-- <div v-for="item in information" :key="item" >
             <h3>姓名:{{item.name}}</h3>
             <h3>年龄:{{item.year}}</h3>
             <h3>性别:{{item.gender}}</h3>
             <h3 v-show="this.year > 7">年级:{{item.grend}}年级</h3>
       </div> -->
        <h3>姓名:{{name}}</h3>
             <h3>年龄:{{year}}</h3>
             <h3>性别:{{gender}}</h3>
             <h3 v-show="this.year > 7">年级:{{grend}}年级</h3>
    </div>
</template>
<style scoped>
#app{
    display: flex;
    justify-content:space-around;
}
</style>
<script>
export default {
    data () {
        return {
            // information:[
            // name='张三',
            // year=9,                                                                                                                                                                            
            // gender='男'
            // ]
            name:'张三',
            year:9,                                                                                                                                                                            
            gender:'男'
           
        }
    },
    methods: {
        
    },
    computed: {
      grend: function(){
      return this.year -7;
      }
    }
}
</script>