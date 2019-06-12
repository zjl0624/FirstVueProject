import Vue from 'vue'
import Router from 'vue-router'
import MessageDetail from '@/components/MessageDetail/MessageDetail'
import Home from '@/components/Home/Home'
import VantLayout from '@/components/VantLayout/VantLayout'
import VantList from '@/components/VantList/VantList'
import VantTabbar from '@/components/VantTabbar/VantTabbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/MessageDetail',
      name: 'MessageDetail',
      component: MessageDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/VantLayout',
      name: 'VantLayout',
      component: VantLayout,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/VantList',
      name: 'VantList',
      component: VantList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/VantTabbar',
      name: 'VantTabbar',
      component: VantTabbar,
      meta: {
        keepAlive: true
      }
    }
  ]
})
