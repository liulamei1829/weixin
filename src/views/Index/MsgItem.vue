<template>
  <div class="container">
    <div class="left">
      <img :src="item.src || require('../../assets/avatar.png')" class="avatar">
    </div>
    <div class="right">
      <div class="above">
        <span class="name">{{item.name}}</span>
        <span class="time">{{formatDate(item.time)}}</span>
      </div>
      <div class="below">
        <span class="message">{{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'MsgItem',
  props: {
    item: {
      src: String,
      name: String,
      time: Number,
      content: String
    }
  },
  data () {
    return {}
  },
  methods: {
    formatDate (time) {
      return moment(time).format('HH:mm')
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 0.5px solid #ddd;
    background-color: #fff;
  }
  .left{
    width: 40px;
    height: 40px;
    margin-left: 15px;
    margin-right: 12px;
  }
  .avatar{
    width: 40px;
    height: 40px;
  }
  .right{
    display: flex;
    flex-direction: column;
    height: 40px;
    flex: 1;
    padding-right: 12px;
  }
  .above{
    display: flex;
    justify-content: space-between;
  }
  .below {
    display: flex;
    align-items: center;
  }
  .name{
    font-size: 14px;
    color: #000;
  }
  .time,.message{
    font-size: 10px;
    color: #ccc;
  }
</style>
