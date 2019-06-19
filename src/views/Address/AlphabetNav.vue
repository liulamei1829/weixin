<template>
  <div class="container">
    <div class="search">
      <img src="" class="searchImg">
    </div>
    <div class="collect">
        <img src="" class="collectImg">
      </div>
    <div  class="alphbet" v-for="(item,index) in alphbetList" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'AlphabetNav',
  data () {
    return {
      alphbetList: []
    }
  }
}
</script>

<style scoped>
  .container{
    width: 10px;
    height: 315px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
</style>
