<template>
  <div id="bg-div" v-if="isShowLoading">
    <van-loading id="loading" size="24px" color="#ffffff" vertical></van-loading>
    <span id="text">加载中...</span>
  </div>
</template>

<script>
export default {
  name: 'CusLoading',
  props: {
    isShowLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  #bg-div {
    background-color: black;
    opacity: 0.7;
    position: fixed;
    z-index: 9999;
    /*width: 50px;*/
    /*height: 50px;*/
    position: fixed;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
  }

  #loading {
    padding: 20px 34px 20px 34px;
  }

  #text {
    color: white;
    font-size: 12px;
    /*padding-left: 12px;*/
    /*padding-right: 12px;*/
  }
</style>
