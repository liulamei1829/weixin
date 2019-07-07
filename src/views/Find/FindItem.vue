<template>
  <div class="container">
    <div class="left">
      <img src="../../assets/friendsCircle.png" class="leftPic">
      <span class="title">朋友圈</span>
    </div>
    <div class="right">
      <div class="rightPic">
        <img src="../../assets/girl.png" class="userPic">
        <img src="../../assets/newMessage.png" class="newMessage">
      </div>
      <img src="../../assets/arrow.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindItem',
  data () {
    return {}
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 46px;
  line-height: 46px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #ddd;
}
.left{
  display: flex;
  align-items: center;
}
.leftPic{
  width: 19px;
  height: 19px;
  margin: 0 16px;
}
.title{
  color: #000;
  font-size: 14px;
}
.right{
  display: flex;
  align-items: center;
}
.rightPic{
  width: 28px;
  position: relative;
}
.userPic{
  width: 28px;
  height: 28px;
}
.newMessage{
  width: 18px;
  height: 18px;
  position: absolute;
  top: 1px;
  right: -7px;
}
</style>
