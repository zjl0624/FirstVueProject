<template>
  <div id="main-div">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="offset"
      id="list"
    >
      <!--<div id="sp-div"></div>-->
      <div id="cell-div" v-for="item in list" :key="item">{{ item }}</div>
      <!--<div id="bottom-div"></div>-->
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'VantList',
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
    /*height: 300px;*/
  }

  #list {
    /*height: 100%;*/
  }

  #bottom-div {
    height: 100px;
    background-color: yellow;
  }
</style>
