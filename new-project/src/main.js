// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ImagePreview } from 'vant'
import axios from 'axios'
// import NetManager from './NetManager/NetManager'
// Vue.prototype.NetManager = NetManager
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ImagePreview)
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

  // if (to.path === '/MessageDetail') {
  //   to.meta.keepAlive = true
  // } else {
  //   to.meta.keepAlive = false
  // }

  next()
})