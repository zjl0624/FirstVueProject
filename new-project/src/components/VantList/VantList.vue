<template>
  <div id="main-div">
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-success">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <div><button type="button">test</button></div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="offset"
      id="list"
    >
      <!--<div id="sp-div"></div>-->
      <div id="cell-div" v-for="item in list" :key="item" @click="clickBaidu">{{ item }}<a href="http://www.baidu.com">去百度</a></div>
      <!--<div id="bottom-div"></div>-->
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'VantList',
  created () {
    this.getBaidu()
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: 0
    }
  },

  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
        console.log('加载更多')
      }, 2000)
    },
    clickBaidu: function () {
      sessionStorage.setItem('name', 'xxxxx')
    },
    getBaidu: function () {
      alert('sessionStorage   ' + sessionStorage.getItem('name'))
      console.log('sessionStorage   ' + sessionStorage.getItem('name'))
    }
  }
}
</script>

<style scoped>
  #sp-div {
    height: 1500px;
    background-color: #07c160;
  }

  #cell-div {
    line-height: 50px;
  }

  #main-div {
    /*height: calc(100% - 50px);*/
    /*overflow: auto;*/
  }

  #list {
    /*height: 100%;*/
  }

  #bottom-div {
    height: 100px;
    background-color: yellow;
  }

  .btn-success {
    background-color: red;
  }
</style>
