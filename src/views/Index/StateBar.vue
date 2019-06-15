<template>
  <div class="statebar">
    <img src="../../assets/computer.png">
    <span>Windows微信已登录</span>
  </div>
</template>

<script>
export default {
  name: 'StateBar',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .statebar{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #f5f3f3;
    color: #000;
    font-size: 12px;
    border: 1px solid #ccc;
  }
  img{
    width: 20px;
    margin: 10px 25px;
  }
</style>
