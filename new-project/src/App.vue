<template>
  <div id="app">
    <!--<navi></navi>-->
    <!--<keep-alive>-->
    <!--<transition :name="direction">-->
    <keep-alive><router-view class="appView" v-if="$route.meta.keepAlive"></router-view></keep-alive>
    <router-view class="appView" v-if="!$route.meta.keepAlive"></router-view>
      <van-tabbar v-model="active" :replace="replace" :route="route" v-if="isShowTabbar">
        <van-tabbar-item
          replace
          to="/"
        >
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/VantList"
          icon="search"
        >
          标签
        </van-tabbar-item>
      </van-tabbar>
    <!--</transition>-->
    <!--</keep-alive>-->
    <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
  </div>
</template>

<script>

import tabbar from './components/tabbar/tabbar'
import person from './components/person/person'
import achievement from './components/achievement/achievement'
import navi from './components/navi/navi'
import achieveHeader from './components/achievement/achieveHeader'
import attendance from './components/achievement/attendance'
import achieveIndex from './components/achievement/achieveIndex'
import achieveFooter from './components/achievement/achieveFooter'
import bestArticle from './components/achievement/bestArticle'
import bestPicture from './components/achievement/bestPicture'
import advert from './components/achievement/advert'
import news from './components/achievement/news'
import MessageDetail from './components/MessageDetail/MessageDetail'
import Home from './components/Home/Home'
import VantLayout from './components/VantLayout/VantLayout'
import VantList from './components/VantList/VantList'
import VantTabbar from './components/VantTabbar/VantTabbar'
import CusLoading from './components/Common/CusLoading'
export default {
  name: 'App',
  created () {
    document.getElementsByName('appView').scrollTop = 700
  },
  components: {
    tabbar,
    achievement,
    person,
    navi,
    achieveHeader,
    attendance,
    achieveIndex,
    achieveFooter,
    bestArticle,
    bestPicture,
    advert,
    news,
    MessageDetail,
    Home,
    VantLayout,
    VantList,
    VantTabbar,
    CusLoading
  },
  data () {
    return {
      direction: 'slide-right',
      active: 0,
      replace: false,
      route: true,
      isShowTabbar: true,
      icon: {
        normal: require('./assets/cm_huli_tishi_icon.png'),
        active: require('./assets/gongxianbang_huangguan1_icon.png')
      }
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (to.path === '/') {
        this.direction = 'slide-right'
      } else if (from.path === '/') {
        this.direction = 'slide-left'
      } else {
        this.direction = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }

      if (to.path === '/' || to.path === '/VantList') {
        this.isShowTabbar = true
      } else {
        this.isShowTabbar = false
      }
    }
  }
}

</script>

<style>
  html{
    background-color: #f2f2f2;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  background-color: #f2f2f2;
  padding-bottom:80px;
}
*{padding:0;margin:0}

  .appView {
    /*position: absolute;*/
    width:100%;
    transition: transform 0.3s ease-out;
  }
  .slide-left-enter{
    transform: translate(100%, 0);
  }
  .slide-left-leave-active{
    transform: translate(-50%, 0);
  }
  .slide-right-enter {
    transform: translate(-50%, 0);
  }
  .slide-right-leave-active{
    transform: translate(100%, 0);
  }
</style>
