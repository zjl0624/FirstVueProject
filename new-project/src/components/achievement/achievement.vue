<template>
  <div v-show="show" v-bind:style="personStyle" id="main-bg-div">
    <achieve-header v-on:listenAchieveHeaderNum="getAchieveHeaderNum"></achieve-header>
    <attendance></attendance>
    <achieve-index></achieve-index>
    <best-article></best-article>
    <best-picture></best-picture>
    <advert></advert>
    <news :newsList="newsList"></news>
    <!--<achieve-footer></achieve-footer>-->
  </div>
</template>

<script>
// import index from '../../router'

import AchieveHeader from './achieveHeader'
import Attendance from './attendance'
import AchieveIndex from './achieveIndex'
import AchieveFooter from './achieveFooter'
import BestArticle from './bestArticle'
import BestPicture from './bestPicture'
import Advert from './advert'
import News from './news'
export default {
  name: 'achievement',
  components: {News, Advert, BestPicture, BestArticle, AchieveFooter, AchieveIndex, Attendance, AchieveHeader},
  props: {
    newsList: {
      type: Array
    }

  },
  data () {
    return {
      show: true,
      personStyle: {
        color: 'black'
        // backgroundColor: 'red'
        // width: 100%,
      }
    }
  },
  mounted () {
    this.tabIndex.$on('indexChanged', (index) => {
      console.log(index)
      // this.indexChanged(index)
      if (index === 0) {
        this.show = true
        // this.personStyle.style.display = 'block'
      } else {
        this.show = false
        // this.personStyle.style.display = 'none'
      }
    })
  },
  methods: {
    getAchieveHeaderNum: function (data) {
      this.$emit('listenAchieveHeaderNum', data)
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;

  /*height: calc(100% - 60px);*/
  /*margin-bottom: 60px;*/
  /*padding-bottom: 60px;*/
  /*bottom: 3rem;*/
}

  #main-bg-div {
    margin-bottom: 3.5rem;
  }
</style>
