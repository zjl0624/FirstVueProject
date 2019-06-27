// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ImagePreview, PullRefresh, List, Row, Col, Tabbar, TabbarItem, Loading, Tab, Tabs } from 'vant'
import axios from 'axios'
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
// import bootstrap from 'bootstrap'
// import './node_modules/bootstrap/dist/css/bootstrap.css'
// import './node_modules/bootstrap/dist/js/bootstrap.js'
// import NetManager from './NetManager/NetManager'
// Vue.prototype.NetManager = NetManager
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ImagePreview)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Row).use(Col)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Loading)
Vue.use(Tab).use(Tabs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    Vue.prototype.tabIndex = this
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let y = document.documentElement.scrollTop
  console.log(y)
  localStorage.setItem('tea', y)
  // if (to.path === '/MessageDetail') {
  //   to.meta.keepAlive = true
  // } else {
  //   to.meta.keepAlive = false
  // }

  next()
})
