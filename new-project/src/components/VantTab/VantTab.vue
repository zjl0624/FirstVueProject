<template>
  <div>
    <van-tabs v-model="active" :swipeable="swipeable" :animated="animated" :ellipsis="ellipsis" :lineWidth="lineWidth">
      <van-tab title="标签标签标签标签标签 1">
        <div slot="title">
          <img src="../../assets/bus_my_qianbao_icon.png" class="tab-title"/>
          标签 1
        </div>
        内容1
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'VantTab',
  data () {
    return {
      active: 0,
      swipeable: true,
      animated: true,
      ellipsis: false,
      lineWidth: 20
    }
  }
}
</script>

<style scoped>
  .tab-title {
    vertical-align: middle;
  }
</style>
