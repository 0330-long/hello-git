import { createRouter, createWebHistory } from 'vue-router'
import test from '../views/test.vue'
import checkBox from '../views/checkBox.vue'
import radio from '../views/radio.vue'
import input from '../views/input.vue'
import selet from '../views/selet.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ps',
      component: test
    },
    {
      path:'/pd',
      component:checkBox
    },
    {
      path:'/pf',
      component:radio
    },
    {
      path:'/pg',
      component:input
    },
    {
      path:'/ph',
      component:selet
    }
  
  ]
})

export default router
