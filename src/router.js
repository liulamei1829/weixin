import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/Index'
import Address from './views/Address/Address'
import Find from './views/Find/Find'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index', component: Index },
    { path: '/address', component: Address },
    { path: '/find', component: Find }
  ]
})
