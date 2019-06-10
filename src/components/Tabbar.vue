<template>
  <div class="container">
    <div class="container-item">
      <img src="../assets/weixin.png">
      <span id="weixin">微信</span>
      <div class="modify">1</div>
    </div>
    <div class="container-item">
      <img src="../assets/tongxunlu.png">
      <span id="tongxunlu">通讯录</span>
      <div class="modify">1</div>
    </div>
    <div class="container-item">
      <img src="../assets/find.png">
      <span id="find">发现</span>
      <div class="modify">1</div>
    </div>
    <div class="container-item">
      <img src="../assets/me.png">
      <span id="me">我</span>
      <div class="modify">1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: [],
  data () {
    return {}
  }

}
</script>

<style scoped>
  .container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
  }
  .container-item{
    position: relative;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-size: 12px;
  }
  img{
    width: 20px;
    height: 20px;
  }
  .modify{
    position: absolute;
    left: 48px;
    bottom: 35px;
    width: 12px;
    height: 12px;
    line-height: 12px;
    text-align: center;
    background-color: #f00;
    border-radius: 50%;
    color: #fff;
    font-size: 8px;
  }
</style>
