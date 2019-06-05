<template>
  <div style="background-color: #f2f2f2">
    <div style="background-color: white;border-radius: 5px;margin-left: 12px;margin-right: 12px;text-align: left;margin-top: 12px;padding-top: 12px;padding-bottom: 12px">
      <span style="margin-left: 12px;">本班成就指数</span>
      <span style="color: #dfdfdf;font-size: 11px;display: block;margin-left: 12px;margin-top: 10px">{{ dateStr }}</span>
      <span style="display: inline-block;margin-left: 12px;color: red;font-size: 40px;margin-top: 10px">{{ totalAchieveNum }}</span>
      <div style="display: inline-block;text-align: left;">
        <span style="font-size: 14px">{{ changePercent }}</span>
        <span style="font-size: 14px;display: block">昨日指数{{ yesterdayAchieveNum }}</span>
      </div>
      <div>
        <div class="bottom">
          <span class="bottom-content" style="display: block">{{ articleNum }}</span>
          <span class="bottom-content" style="display: block">文章数</span>
        </div>
        <span class="se">|</span>
        <div class="bottom">
          <span class="bottom-content" style="display: block">{{ pictureNum }}</span>
          <span class="bottom-content" style="display: block">照片数</span>
        </div>
        <span class="se">|</span>
        <div class="bottom">
          <span class="bottom-content" style="display: block">{{ teachersNum }}</span>
          <span class="bottom-content" style="display: block">教师数</span>
        </div>
        <span class="se">|</span>
        <div class="bottom">
          <span class="bottom-content" style="display: block">{{ personalAchieveNum }}</span>
          <span class="bottom-content" style="display: block">个人成就数</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'achieveIndex',
  data () {
    return {
      dateStr: '2019-09-12',
      totalAchieveNum: 398.87,
      yesterdayAchieveNum: 87.88,
      isAdd: true,
      changePercent: '12%',
      articleNum: 108,
      pictureNum: 88,
      teachersNum: 44,
      personalAchieveNum: 222.12
    }
  }
}
</script>

<style scoped>
.bottom {
  display: inline-block;
  width: 60px;
  text-align: center;
  position: relative;
}
.bottom-content {
  font-size: 12px;
}
.se {
  color: #dfdfdf;
}
</style>
