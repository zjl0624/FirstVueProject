<template>
  <div style="background-color: #f2f2f2">
    <div style="background-color: white;border-radius: 5px;margin-left: 12px;margin-right: 12px;text-align: left;margin-top: 12px;padding-top: 12px;padding-bottom: 12px;position: relative">
      <span style="margin-left: 12px;">今日出勤统计</span>
      <span style="color: #dfdfdf;border: 1px solid #dfdfdf;font-size: 11px;border-radius: 5px;padding-left: 4px;padding-right: 4px">{{ grade_name }}</span>
      <span style="color: #dfdfdf;font-size: 11px;display: block;margin-left: 12px;margin-top: 10px">{{ dateStr }}</span>
      <span style="display: inline-block;margin-left: 12px;color: red;font-size: 40px;margin-top: 10px">{{ percentStr }}</span>
      <button @click="clickStart">开始点名</button>
      <div id="bottom-div">
        <span style="margin-left: 0px;text-align: center">应到 {{ shouldArrive }}</span>
        <span>|</span>
        <span>实到 {{ arrived }}</span>
        <span style="color: #dfdfdf;margin-left: 0px;right: 0px">病假 {{ sickLeave }}  事假 {{ thingsLeave }}  其他 {{ others }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'attendance',
  data () {
    return {
      grade_name: '太阳班',
      dateStr: '2019-06-08',
      percentStr: '90%',
      shouldArrive: 20,
      arrived: 18,
      sickLeave: 3,
      thingsLeave: 5,
      others: 2
    }
  },
  methods: {
    clickStart: function () {
      alert('点击了开始报名')
    }
  }
}
</script>

<style scoped>
button {
  position: absolute;
  margin-top: 10px;
  right: 40px;
  background-color: white;
  border: 1px solid #ffad1a;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  color: #cda924;

}

  #bottom-div {
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;
  }
</style>
