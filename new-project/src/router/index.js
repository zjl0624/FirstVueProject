import Vue from 'vue'
import Router from 'vue-router'
import MessageDetail from '@/components/MessageDetail/MessageDetail'
import Home from '@/components/Home/Home'
import VantLayout from '@/components/VantLayout/VantLayout'
import VantList from '@/components/VantList/VantList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/MessageDetail',
      name: 'MessageDetail',
      component: MessageDetail
    },
    {
      path: '/VantLayout',
      name: 'VantLayout',
      component: VantLayout
    },
    {
      path: '/VantList',
      name: 'VantList',
      component: VantList
    }
  ]
})
