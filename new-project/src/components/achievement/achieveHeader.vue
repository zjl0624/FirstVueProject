<template>
  <div id="achieveHeader">
    <div id="headIcon">
      <img src="../../assets/cm_huli_tishi_icon.png" style="width: 40px;height: 40px;padding-top: 10px;border-radius: 20px;display: inline-block"/>
    </div>
    <span style="height: 27px;position: relative;bottom: 30px">{{ name }}</span>
    <span style="color: #525252;font-size: 15px;position: relative;bottom: 30px">{{ prefession }}</span>
    <select v-model="selected" @change="change()">
      <option disabled value="">请选择</option>
      <option v-for="grade in grades" :key="grade.grade_id" @click="clickGradeOption(grade.grade_name)">{{ grade.grade_name }}</option>
    </select>
    <span class="msgNum" style="margin-left: 80px;color: red">{{ interactionNum }}</span>
    <span class="msgNum">条未查看互动消息</span>
    <span class="msgNum" style="margin-left: 30px;color: red">{{ unauditedNum }}</span>
    <span class="msgNum">条未审核学生</span>
    <div>
      <span class="msgNum" style="display: inline-block;margin-left: 80px;color: red">{{ leavingNum }}</span>
      <span class="msgNum">条未查看消息</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'achieveHeader',
  created () {
    this.$axios({
      url: '/api/Homes/GradeInfo',
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      params: {userId: 'xxx'}
    }).then(res => {
      // console.log(res.data)
      this.grades = res.data.data
    })
  },
  data () {
    return {
      headIcon: '',
      name: '张三',
      prefession: '数学老师',
      interactionNum: 2,
      unauditedNum: 3,
      leavingNum: 4,
      selected: '',
      grades: [
        // {grade_id: '0101', grade_name: '一年级1班'},
        // {grade_id: '0201', grade_name: '二年级1班'},
        // {grade_id: '0302', grade_name: '三年级2班'},
        // {grade_id: '0404', grade_name: '四年级4班'}
      ]
    }
  },
  methods: {
    change () {
      console.log(this.selected)
    },
    clickGradeOption (gname) {
      console.log(gname)
      // this.selected = gname
      console.log('选中的年级是：' + this.selected)
    }
  }
}
</script>

<style scoped>
#achieveHeader {
  background-color: #ffffff;
  text-align: left;
}

#headIcon {
  text-align: center;
  background-color: #ff1a02;
  height: 57.5px;
  width: 57.5px;
  border-radius: 29px;
  margin-top: 30px;
  margin-left: 15px;
  display: inline-block;
}

select {
  display: block;
  margin-left: 80px;
  border: solid 1px #ffbb3c;
  color: #ffbb3c;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
  background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
  padding-right: 14px;
  padding-left: 3px;
  /*width: 55px;*/
  position: relative;
  bottom: 25px;
}

.msgNum {
  font-size: 11px;
  position: relative;
  bottom: 10px
}
</style>
