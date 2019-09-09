<template>
  <div v-show="show" v-bind:style="personStyle">
    <!--<van-image-preview-->
      <!--v-model="show"-->
      <!--:images="images"-->
      <!--@change="onChange"-->
    <!--&gt;-->
      <!--&lt;!&ndash;<template v-slot:index>第{ index }页</template>&ndash;&gt;-->
    <!--</van-image-preview>-->
    <!--<div id="bottom"></div>-->
  </div>
</template>

<script>
export default {
  name: 'person',
  mounted () {
    this.tabIndex.$on('indexChanged', (index) => {
      // this.indexChanged(index)
      if (index === 1) {
        this.show = true
      } else {
        this.show = false
      }
    })
  },
  methods: {
    indexChanged: function (index) {

    },
    onChange (index) {
      console.log(index)
      this.index = index
    }
  },
  data () {
    return {
      personStyle: {},
      show: false,
      index: 0,
      images: [
        'http://img3.redocn.com/tupian/20150312/haixinghezhenzhubeikeshiliangbeijing_3937174.jpg',
        'http://s2.sinaimg.cn/middle/60bf1eaagb701b0890451&690'
      ],
      asyncClose: false
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: calc(100% - 3rem);
    background-color: white;
  }

#bottom {
  background-color: black;
  opacity: 0.5;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 400px;
  z-index: 3000;
}
</style>
