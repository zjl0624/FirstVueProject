<template>
  <div style="text-align: left;background-color: #f2f2f2">
    <div style="background-color: white;border-radius: 5px;margin-left: 12px;margin-right: 12px;text-align: left;padding-top: 12px">
      <span style="margin-left: 12px">本周我的最佳照片</span>
      <div style="border-radius: 0px 0px 5px 5px;overflow: hidden">
        <div class="best-pic" v-for="item in pics" :key="item.picId" style="display: inline-block;width: calc(100%/3);text-align: center;position: relative;overflow: hidden">
          <img :src="item.picUrl"/>
          <span style="position: absolute; top: 0%; left: 0%;width:100%;height:100%;background-color: black;opacity: 0.3">
          </span>
          <div style="position: absolute;left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px">
            <img src="../../assets/att_home_jinshi_icon.png" style="width: 15px;height: 15px"/>
            <span style="bottom: 3px;position: relative">{{ item.friends }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'bestPicture',
  data () {
    return {
      pics: [
        {friends: 100, picId: 1, picUrl: 'http://n.sinaimg.cn/photo/700/w1000h500/20190530/353f-hxsrwwr0289459.jpg'},
        {friends: 98, picId: 2, picUrl: 'http://n.sinaimg.cn/news/700/w1000h500/20190529/68a7-hxsrwwq7568428.jpg'},
        {friends: 77, picId: 3, picUrl: 'http://n.sinaimg.cn/news/700/w1000h500/20190529/9f5b-hxsrwwq4810340.jpg'},
        {friends: 88, picId: 4, picUrl: 'http://n.sinaimg.cn/photo/700/w1000h500/20190528/2d24-hxsrwwq0258723.jpg'},
        {friends: 55, picId: 5, picUrl: 'http://s.img.mix.sina.com.cn/auto/crop?size=260_260&img=http%3A%2F%2Fsinastorage.com%2Fstorage.zone.photo.sina.com.cn%2Fzone%2Fcrop%2F20190530%2Fad44a8ee5bd843bf3b6dcff33e964332.jpg%3F%26ssig%3DzXxAgdHr6b%26KID%3Dsina%2Cslidenews%26Expires%3D1559202320'},
        {friends: 23, picId: 6, picUrl: 'http://s.img.mix.sina.com.cn/auto/crop?size=260_260&img=http%3A%2F%2Fsinastorage.com%2Fstorage.zone.photo.sina.com.cn%2Fzone%2Fcrop%2F20190530%2Ff22e9e415ed55d2e4d54a4e3afc2372a.jpg%3F%26ssig%3D2STEJdtgFZ%26KID%3Dsina%2Cslidenews%26Expires%3D1559203982'}
      ]
    }
  }

}
</script>

<style scoped>
img {
  max-width: 100%;
  height: 87px;
  text-align: center;
}
</style>
