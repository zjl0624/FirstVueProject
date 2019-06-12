<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="offset"
      >
        <achievement v-on:listenAchieveHeaderNum="getAchieveHeaderNum" :newsList="newsList"></achievement>
        <person></person>
      </van-list>
    </van-pull-refresh>
    <!--<tabbar></tabbar>-->
    <first v-bind:number="number" v-bind:testCount="testCount" v-if="isShow"></first>
    <input id="testCountButton" type="button" value="xxxxxx" @click="changeTest">
  </div>
</template>

<script>
import Achievement from '../achievement/achievement'
import Person from '../person/person'
import Tabbar from '../tabbar/tabbar'
import First from './First'
export default {
  name: 'Home',
  components: {First, Achievement, Person, Tabbar},
  created () {

  },
  data () {
    return {
      number: {},
      isShow: false,
      isLoading: false,
      pageNumber: 1,
      isRouterAlive: true,
      loading: false,
      finished: false,
      list: [],
      testCount: '22',
      offset: 0,
      newsList: []
    }
  },
  methods: {
    getAchieveHeaderNum: function (data) {
      let isOld = localStorage.getItem('isOld')
      if (isOld === null) {
        this.number = data
        document.body.style.overflowY = 'hidden'
        this.isShow = true
      }
      localStorage.setItem('isOld', true)
    },
    onRefresh: function () {
      setTimeout(() => {
        this.isLoading = false
        this.pageNumber = 1
        console.log('刷新')
      }, 500)
    },
    onLoad: function () {
      // 异步更新数据
      setTimeout(() => {
        console.log('上拉成功')
        for (let i = 0; i < 5; i++) {
          let item = {
            msgId: 23424,
            msgTypeContent: '工作计划',
            msgType: 0,
            title: '扩大非交付年可能覅都是开发南门卫房in我if呢覅偶玩飞机无法你我放你覅无法将诶往复机',
            teacher: '小太阳老师',
            sendDate: '2018-12-34',
            readNum: 111,
            friendsNum: 33,
            transNum: 111,
            commentNum: 2222
          }
          this.newsList.push(item)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.newsList.length >= 20) {
          this.finished = true
        }
      }, 2000)
    },
    changeTest: function () {
      this.testCount = '233'
      document.getElementById('test').innerHTML = '1111111111111111111111111111111111111111111111111111'
      // document.getElementsByClassName('msgNum')[0].style.display = 'none'
    }
  }
}
</script>

<style scoped>
/*div {*/
  /*margin-bottom: 3rem;*/
/*}*/

  #testCountButton {
    position: fixed;
    left: 100px;
    bottom: 200px;
    color: red;
  }
</style>
