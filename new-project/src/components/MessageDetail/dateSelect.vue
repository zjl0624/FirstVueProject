<template>
  <section class="selecter">
    <div class="title" @click="isShow=!isShow"><div class="text">{{ value }}</div></div>
    <ul v-show="isShow">
      <li v-for="(item, index) in list" :key="index" @click="changeTitle(item)">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'dateSelect',
  data () {
    return {
      list: ['2019/09/10-2019/09/11', '2019/09-2019/00', '2019/09/0-201/09/10'],
      value: '2019/09/09-2019/09/10',
      isShow: false
    }
  },
  methods: {
    changeTitle (item) {
      this.value = item
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.selecter{
  background-color: white;
}
  .title{
    width:60%;
    margin:0 auto;
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: 0 8px;
    color: #323233;
    font-size: 15px;
    line-height: 18px;
  }
  .text{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text::after{
    position: absolute;
    top: 50%;
    right: -4px;
    margin-top: -5px;
    border: 3px solid;
    border-color: transparent transparent #323233 #323233;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: 0.8;
    content: '';
  }
</style>
