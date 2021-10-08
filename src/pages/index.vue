<template>
    <div id="app">
    <heade/>
        <h3>标题</h3>
        <button @click="changeitem">click me</button>
        <p>{{n}}</p>
    <foot/>
    </div>
</template>
<script>
export default {
    data () {
        return {
            n:5
        }
    },
    methods: {
        changeitem(){
            this.n=1;
        }
    }
}
</script>
<style scoped>

</style>