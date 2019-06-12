<template>
  <div>
    <!--<van-tabbar v-model="active">-->
      <!--<van-tabbar-item icon="home-o">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="search">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="friends-o">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="setting-o">标签</van-tabbar-item>-->
    <!--</van-tabbar>-->

    <van-tabbar route v-model="active" :replace="replace">
      <van-tabbar-item
        replace
        to="/VantLayout"
        icon="home-o"
      >
        标签
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/VantList"
        icon="search"
      >
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'VantTabbar',
  data () {
    return {
      active: 0,
      replace: false
    }
  }
}
</script>

<style scoped>

</style>
