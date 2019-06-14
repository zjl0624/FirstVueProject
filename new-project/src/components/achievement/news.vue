<template>
  <div style="background-color: #f2f2f2">
    <div style="background-color: white;border-radius: 5px;margin-left: 12px;margin-right: 12px;text-align: left;margin-top: 12px;padding-top: 12px;">
      <span style="margin-left: 12px">最新消息</span>
      <span style="display: block;margin-left: 12px;margin-top: 10px;font-size: 14px;color: gray">{{ latestDateStr }}</span>
      <div style="position: relative">
        <ul>
          <li v-for="(message,index) in newsList" :key="index" @click="clickCell(index)">
            <span style="color: gray;font-size: 14px;border: 1px solid gray;border-radius: 5px;padding: 0px 5px">{{ message.msgTypeContent }}</span>
            <span>{{ message.title }}</span>
            <div>
              <span style="font-size: 14px;color: gray">{{ message.teacher }}</span>
              <span style="font-size: 14px;color: gray">{{ message.sendDate }}</span>
            </div>
            <div style="left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px;display: inline-block">
              <img src="../../assets/att_pingjia_huise_icon.png" style="width: 15px;height: 15px"/>
              <span style="bottom: 2.5px;position: relative;color: gray">{{ message.readNum }}</span>
            </div>
            <div style="left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px;display: inline-block">
              <img src="../../assets/att_pingjia_huise_icon.png" style="width: 15px;height: 15px"/>
              <span style="bottom: 2.5px;position: relative;color: gray">{{ message.friendsNum }}</span>
            </div>
            <div style="left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px;display: inline-block">
              <img src="../../assets/att_pingjia_huise_icon.png" style="width: 15px;height: 15px"/>
              <span style="bottom: 2.5px;position: relative;color: gray">{{ message.transNum }}</span>
            </div>
            <div style="left: 0px;bottom: 10px;left: 12px;color: white;font-size: 12px;display: inline-block">
              <img src="../../assets/att_pingjia_huise_icon.png" style="width: 15px;height: 15px"/>
              <span style="bottom: 2.5px;position: relative;color: gray">{{ message.commentNum }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <van-loading size="24px" v-if="isShowLoading" vertical>加载中...</van-loading>

  </div>
</template>

<script>
export default {
  name: 'news',
  props: {
    newsList: {
      type: Array
    }
  },
  data () {
    return {
      isShowLoading: false,
      latestDateStr: '2019-08-09',
      totalMsg: [
        {
          msgId: 23424,
          msgTypeContent: '工作计划',
          msgType: 0,
          title: '扩大非交付年可能覅都是开发南门卫房in我if呢覅偶玩飞机无法你我放你覅无法将诶往复机',
          teacher: '小太阳老师',
          sendDate: '2018-12-34',
          readNum: 111,
          friendsNum: 33,
          transNum: 111,
          commentNum: 2222
        },
        {
          msgId: 234,
          msgTypeContent: '通知',
          msgType: 1,
          title: '米粉您为',
          teacher: '大太阳老师',
          sendDate: '2018-11-23',
          readNum: 123,
          friendsNum: 33,
          transNum: 444,
          commentNum: 12344
        },
        {
          msgId: 564,
          msgTypeContent: '工作计划',
          msgType: 0,
          title: '核桃仁和融合',
          teacher: '小太阳老师',
          sendDate: '2018-09-12',
          readNum: 222,
          friendsNum: 111,
          transNum: 345,
          commentNum: 12354
        }
      ]
    }
  },
  methods: {
    clickCell: function (index) {
      this.$router.push({
        name: 'MessageDetail',
        params: this.totalMsg[index]
      })
    }
  }
}
</script>

<style scoped>
li {
  margin: 12px;
  /*padding-bottom: 12px;*/
  border-bottom: 1px solid #f2f2f2;
}
</style>
