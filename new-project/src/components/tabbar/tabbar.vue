<template>
	<div class="tab" onscroll="false">
    <div id="achievement-btn" style="display: inline" @click="clickAchievementBtn">
      <img src="../../assets/cm_huli_tishi_icon.png"/>
      <span>成就</span>
    </div>
    <div id="person-btn" style="display: inline" @click="clickPersonBtn">
      <img src="../../assets/cm_tongzhi_zhifutixing_img.png"/>
      <span>个人</span>
    </div>
    <div id="create-btn" @click="clickCreateBtn">
      <img src="../../assets/bus_my_qianbao_icon.png"/>
    </div>
  </div>
</template>

<script>
import {getTestData} from '@/NetManager/NetManager'
// import axios from 'axios'
// let index = 0
export default {
  name: 'tabbar',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    clickAchievementBtn () {
      this.index = 0
      this.changeIndex()
    },
    clickPersonBtn () {
      this.index = 1
      this.changeIndex()
    },
    changeIndex () {
      this.tabIndex.$emit('indexChanged', this.index)
    },
    clickCreateBtn () {
      alert('点击了中间按钮')
    },
    _getTestData () {
      console.log('xxxxx')
      getTestData().then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
  :root {
    tabbarHeight:3rem;
  }
  div {
    background-color: white;
    position: fixed;
    bottom: 0rem;
    height: 3rem;
    width: 100%;
    padding: 0rem;
  }

  #achievement-btn {
    position: absolute;
    left: 0rem;
    height: 3rem;
    width: 50%;
  }

  #person-btn {
    position: absolute;
    right: 0rem;
    height: 3rem;
    width: 50%;
  }
  #achievement-btn,#person-btn {
    border: none;
    background: none;
    text-align: center;
  }

  img {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    display: block;
  }

  #create-btn {
    border-radius: 1.4rem;
    background-color: white;
    position: fixed;
    bottom: 2rem;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 3rem;
    padding-top: 0.75rem;
    left: calc(50% - 1.875rem);
  }
</style>
