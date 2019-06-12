<template>
  <div id="bg-div">
    <van-row>
      <van-col class="xxx">span: 8</van-col>
      <van-col class="xxx">span: 8</van-col>
      <van-col class="xxx">span: 8</van-col>
    </van-row>

    <van-row>
      <van-col class="xxx">span: 4</van-col>
      <van-col class="xxx" span="10" offset="4">offset: 4, span: 10</van-col>
    </van-row>

    <van-row>
      <van-col class="xxx" offset="12">offset: 12, span: 12</van-col>
    </van-row>
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col class="yyy" span="6">span: 6</van-col>
      <van-col class="yyy" span="6">span: 6</van-col>
      <van-col class="yyy" span="6">span: 6</van-col>
    </van-row>
    <div class="outeer" @click.capture="outer">
      <div class="middle" @click.capture="middle">
      <button @click.capture="inner">点击我(^_^)</button>
      </div>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'VantLayout',
  data () {
    return {
      message: '测试冒泡'
    }
  },
  methods: {
    inner: function () {
      this.message = 'inner： 这是最里面的Button'
    },
    middle: function () {
      this.message = 'middle: 这是中间的Div'
    },
    outer: function () {
      this.message = 'outer: 这是外面的Div'
    }
  }
}
</script>

<style scoped>
  .xxx {
    background-color: #07c160;
  }

  .yyy {
    background-color: #1989fa;
  }

  #bg-div {
    /*background-image: url("../../assets/cm_tongzhi_zhifutixing_img.png");*/
    /*background-image: url("http://n.sinaimg.cn/photo/700/w1000h500/20190610/fc28-hyeztys2410911.jpg");*/
  }
</style>
