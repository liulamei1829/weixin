<template>
  <div>
    <div class="top">
      <div class="title">发现</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',
  components: {},
  data () {
    return {}
  }
}
</script>

<style scoped>
.top{
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #e6e6e6;
  z-index: 999;
  position: relative;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 16px;
  }
</style>
