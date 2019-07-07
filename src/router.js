import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/Index'
import Address from './views/Address/Address'
import Find from './views/Find/Find'
import Me from './views/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/address', component: Address },
    { path: '/find', component: Find },
    { path: '/me', component: Me }
  ]
})
