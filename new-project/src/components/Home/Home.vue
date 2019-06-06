<template>
  <div>
    <achievement v-on:listenAchieveHeaderNum="getAchieveHeaderNum"></achievement>
    <person></person>
    <tabbar></tabbar>
    <first v-bind:number="number" v-if="isShow"></first>
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
      isShow: false
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
    }
  }
}
</script>

<style scoped>

</style>
