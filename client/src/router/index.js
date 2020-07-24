import Vue from 'vue'
import Router from 'vue-router'

import tomato from '@/components/tomato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: tomato
    }
  ]
})
