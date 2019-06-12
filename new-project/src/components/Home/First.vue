<template>
  <div v-if="isShow">
    <div id="back-div"></div>
    <div id="header-number-div">
      <div id="header-box">
        <div id="header-interaction-num">
          <span>{{ number.interactionNum }}</span>
          <span>条未查看互动消息{{ testCount }}</span>
        </div>
        <div id="header-unauditedNum-num">
          <span>{{ number.unauditedNum }}</span>
          <span>条未审核学生</span>
        </div>
      </div>
      <div id="header-leaving">
        <span>{{ number.leavingNum }}</span>
        <span>条未查看消息</span>
      </div>
      <input type="button" value="我知道了" id="close-btn" @click="clickCloseBtn">
    </div>
  </div>
</template>

<script>
export default {
  name: 'First',
  props: {
    number: {
      type: Object
    },
    testCount: {
      type: String
    }
  },
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    clickCloseBtn: function () {
      document.body.style.overflowY = 'auto'
      this.isShow = false
    }
  },
  watch: {
    testCount: function () {
      console.log('jdsafljf' + this.testCount)
    }
  }
}
</script>

<style scoped>
  #back-div {
    background-color: black;
    opacity: 0.5;
    position: fixed;
    width: 100%;
    height:100%;
    top: 0px;
    left: 0px;
  }

  #header-number-div {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  #header-box {
    background-color: white;
    display: flex;
    margin-left: 60px;
    margin-right: 12px;
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
    margin-top: 100px;
  }

  #header-leaving {
    background-color: white;
    margin-left: 60px;
    margin-right: 12px;
    text-align: left;
    padding-left: 20px;
  }

  #header-interaction-num {
    margin-left: 20px;
  }

  #header-unauditedNum-num {
    margin-right: 20px;
    margin-left: 10px;
  }
  span {
    font-size: 11px;
  }

  #close-btn {
    border: none;
    margin-top: 40px;
    background-color: #ffbb3c;
    color: white;
    padding: 5px 10px;
    border-radius: 14px;
    font-size: 17px;
  }
</style>
