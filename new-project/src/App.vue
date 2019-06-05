<template>
  <div id="app">
    <!--<navi></navi>-->
    <!--<keep-alive>-->
    <router-view></router-view>
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
export default {
  name: 'App',
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
    Home
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
</style>
