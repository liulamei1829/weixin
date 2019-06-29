<template>
  <div class="container">
    <div class="initial">
      <div class="initial-container" v-if="initial==='star'">
        <img src="../../assets/collect.png" class="initial-pic">
        <div class="collect">星标朋友</div>
      </div>
      <div v-else>
          {{ initial }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Initial',
  props: ['initial'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.container{
  height: 28px;
  background-color: #ddd;
  line-height: 28px;
}
.initial{
  color: #5c5c5c;
  font-size: 10px;
  margin-left: 15px;
}
.initial-container{
  display: flex;
  align-items: center;
}
.initial-pic{
  width: 13px;
  margin-right: 10px;
  display: block;
}
.collect{
  font-size: 10px;
  color: #5c5c5c;
}
</style>
