<template>
  <div style="background-color: chartreuse">
    <span @click="goback">{{ msgId }}</span>
    <div id="img-bg-div">
      <img src="../../assets/att_denglu_bg_icon.png"/><img src="../../assets/att_denglu_bg_icon.png"/>
    </div>
    <div id="box">
      <div class="box-item" v-for="(item,index) in boxArr" :key="index">
        <span class="box-item-name">{{ item.name }}</span>
      </div>
    </div>

    <div id="header-avg">
      <div id="header-avg-left-div">
        <div class="header-avg-img-div" id="header-avg-left-img-div">
          <!--<img :src="leftImage" id="header-avg-left-icon"/><img src="gongxianbang_huangguan2_icon.png" id="header-avg-left-hat"/>-->
        </div>
        <div id="header-avg-left-name-div">
          <span class="header-avg-name-span">
            名字名
          </span>
        </div>
      </div>
      <div id="header-avg-middle-div">
        <div class="header-avg-img-div" id="header-avg-middle-img-div">
          <!--<img :src="leftImage" id="header-avg-left-icon"/><img src="gongxianbang_huangguan2_icon.png" id="header-avg-left-hat"/>-->
        </div>
        <div id="header-avg-middle-name-div">
          <span class="header-avg-name-span">
            名字名名字名名字名名字名名字名
          </span>
        </div>
      </div>
      <div id="header-avg-right-div">
        <div class="header-avg-img-div" id="header-avg-right-img-div">
          <!--<img :src="leftImage" id="header-avg-left-icon"/><img src="gongxianbang_huangguan2_icon.png" id="header-avg-left-hat"/>-->
        </div>
        <div id="header-avg-right-name-div">
          <span class="header-avg-name-span">
            名字名名字字名名字
          </span>
        </div>
      </div>
    </div>

    <div id="flex-cell">
      <ul id="flex-ul">
        <li id="flex-cell-li">
          <span id="flex-cell-index-span">1</span>
          <!--<img src="http://n.sinaimg.cn/photo/700/w1000h500/20190605/9467-hxyuaph4976302.jpg" id="flex-cell-img"/>-->
          <!--<span id="flex-cell-name-span">名字名字名字名字名字名字名字名字名字名字名字名字</span>-->
          <span id="flex-cell-count-span">1000000</span>
        </li>
      </ul>
    </div>

    <input id="input-button" type="button" value="测试"/>

    <div class="avg-div">
      <div class="avg-item avg-item-left">第一块</div>
      <div class="avg-item avg-item-left">第二块</div>
      <div class="avg-item avg-item-left">第三块</div>
      <div class="avg-item avg-item-right">第四块</div>
    </div>

    <div class="cell-div">
      <img src="../../assets/att_denglu_bg_icon.png" class="cell-img"/>
      <div class="cell-content-div">
        <span class="cell-span">总销售量</span>
        <span class="cell-span">10件</span>
      </div>
    </div>

    <div class="red-div green-div"></div>

    <div class="box1">
      <div class="inner">
      </div>
      <div class="inner1">
      </div>
    </div>

    <date-select style="position: fixed;top: 0;left: 0;right: 0"></date-select>
  </div>
</template>

<script>

import DateSelect from './dateSelect'
export default {
  name: 'MessageDetail',
  components: {DateSelect},
  data () {
    return {
      msgId: this.$route.params.msgId,
      boxArr: [
        {name: '第一块'},
        {name: '第二abraded块'},
        {name: '第三dataclasses块'},
        {name: '第四daffi块'},
        {name: '第五difference块'},
        {name: '第六entrepreneurs块'}
      ],
      leftImage: ''
    }
  },
  methods: {
    goback: function () {
      this.$router.go(-1)
    }
  },
  mounted () {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady () {
      // WeixinJSBridge.call('hideToolbar')
      // WeixinJSBridge.call('hideOptionMenu')
    })
  }
}
</script>

<style scoped>
  img {
    width: 100px;
    border: 4px solid yellow;
    border-radius: 32px;
  }

  #img-bg-div {
    /*font-size: 0px;*/
  }

  #box {
    display: flex;
    flex-wrap: wrap;
    /*flex-direction: column;*/
    justify-content: space-around;
    align-items: center;
  }

  .box-item {
    width: 100px;
    /*height: 50px;*/
    text-align: center;
    background-color: #1989fa;
    padding: 0px 20px;
    margin-top: 10px;
    flex-grow: 1;
  }

  /*.box-item-name {*/
    /**/
  /*}*/

  #img-bg-div {
    display: flex;
    position: relative;
  }

  #header-avg {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
    /*text-align: center;*/
    vertical-align: middle;
  }

  #header-avg-left-div {
    background-color: #ff1a02;
    width: calc((100% - 5px)/3);
    /*height: 100px;*/

  }

  .header-avg-img-div {
    background-color: white;
    /*width: 40px;*/
    /*height: 40px;*/
    margin: 5px auto 0px auto;
    /*margin: auto;*/
  }

  #header-avg-left-img-div {
    width: 40px;
    height: 40px;
  }

  #header-avg-middle-img-div {
    width: 68px;
    height: 68px;
  }

  #header-avg-right-img-div {
    width: 50px;
    height: 50px;
  }

  #header-avg-left-name-div {
    text-align: center;
  }

  .header-avg-name-span {
    width: auto;
    text-align: left;
    display: inline-block;
  }

  #header-avg-middle-div {
    background-color: #ff1a02;
    width: calc((100% - 5px)/3);
    /*height: 100px;*/
  }

  #header-avg-right-div {
    background-color: #ff1a02;
    width: calc((100% - 5px)/3);
    /*height: 100px;*/
  }

  #flex-ul {
    margin-top: 20px;
  }

  #flex-cell-li {
    display: flex;
    justify-content: space-between;
    background: #1989fa;
    align-items: center;
  }

  #flex-cell-index-span {
    margin-left: 20px;
    flex-shrink: 0;
  }

  #flex-cell-img {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    margin-left: 10px;
  }

  #flex-cell-name-span {
    padding-left: 20px;
    padding-right: 20px;
  }

  #flex-cell-count-span {
    margin-right: 20px;
    flex-shrink: 0;
  }

  #input-button {
    margin-top: 20px;
    background-color: #ff976a;
    border: none;
  }

  .avg-div {
    /*padding: 20px;*/
    /*display: flex;*/
    white-space: nowrap;
  }

  .avg-item {
    position: relative;
    display: inline-block;
    /*width: calc(25% - 1px);*/
    width: 25%;
    /*border-top: solid red 1px;*/
    /*border-bottom: solid red 1px;*/
    /*float: left;*/
  }

  .avg-item-left {
    /*border-left: solid red 1px;*/
  }

  .avg-item-right {
    /*border-right: solid red 1px;*/
  }

  .cell-div {
    background-color: white;
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
    width: 200px;
    border: 2px solid red;
  }

  .cell-img {
    display: inline-block;
    vertical-align: middle;
  }

  .cell-content-div {
    display: inline-block;
    vertical-align: middle;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .cell-span {
    display: block;
  }

  .green-div {
    background-color: green;
  }

  .red-div {
    width: 100%;
    height: 100px;
    background-color: red;
  }

  .box1{
    display: flex;
    flex-direction: row;
    margin:100px auto;
    width:400px;
    height:200px;
    border:1px solid red;

  }
  .inner{
    flex-basis:100px;
    height:100px;
    background:pink;
  }
  .inner1 {
    flex-basis: 200px;
    height: 100px;
    background: blue;
  }

</style>
