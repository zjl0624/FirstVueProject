<template>
  <div style="text-align: left;background-color: #f2f2f2">
    <div style="background-color: white;border-radius: 5px;margin-left: 12px;margin-right: 12px;text-align: left;margin-top: 12px;padding-top: 12px">
      <span style="margin-left: 12px">本周我的最佳文章</span>
        <div style="position: relative">
          <img src="../../assets/att_denglu_bg_icon.png" style="display: block;width: 100%"/>
          <span style="position: absolute; top: 0%; left: 0%;width:100%;height:100%;background-color: black;opacity: 0.3">
          </span>
          <span style="position: absolute;color: white;bottom: 30px;left: 12px;">{{ title }}</span>
          <div style="position: absolute;left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px">
            <span>{{ readNum }}次阅读</span>
            <span>{{ likesNum }}人点赞</span>
            <span>{{ transNum }}次转发</span>
            <span>{{ commentsNum }}人评论</span>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'bestArticle',
  data () {
    return {
      title: '最佳文章的标题',
      readNum: 22,
      likesNum: 33,
      transNum: 1000,
      commentsNum: 2000
    }
  }
}
</script>

<style scoped>

</style>
