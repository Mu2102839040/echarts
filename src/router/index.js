import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index.vue'
import second from '../pages/second.vue'
import three from '../pages/three.vue'
import four from '../pages/four.vue'
import five from '../pages/five.vue'
import six from '../pages/six.vue'
import seven from '../pages/seven.vue'
import eight from '../pages/eight.vue'
import ten from '../pages/ten.vue'
import eleven from '../pages/eleven.vue'
import twelve from '../pages/twelve.vue'
import threeth from '../pages/threeth.vue'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/five',
      name: 'five',
      component: five
    },
     {
       path: '/six',
       name: 'six',
       component: six
     },
     {
       path: '/seven',
       name: 'seven',
       component: seven
     }, {
       path: '/eight',
       name: 'eight',
       component: eight
     }, {
       path: '/ten',
       name: 'ten',
       component: ten
     }, {
       path: '/eleven',
       name: 'eleven',
       component: eleven
     }, {
       path: '/twelve',
       name: 'twelve',
       component: twelve
     }, {
       path: '/threeth',
       name: 'threeth',
       component: threeth
     }
  ]
})
