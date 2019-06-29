<template>
  <div class="container">
    <div class="search">
      <img src="../../assets/alphabetSearch.png" class="searchImg">
    </div>
    <div class="collect">
      <img src="../../assets/collect.png" class="collectImg">
    </div>
    <div class="alphabet" v-for="(item,index) in alphabetList" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'AlphabetNav',
  data () {
    return {
      alphabetList: ['C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z', '#']
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
    position: fixed;
    top: 135px;
    right: 0;
  }
  .alphabet{
    font-size: 6px;
    color: #333;
    height: 12px;
    line-height: 12px;
  }
  .search, .collect{
    width: 12px;
    height: 12px;
    line-height: 12px;
  }
  .searchImg, .collectImg{
    width: 12px;
    height: 12px;
    display: block;

  }
</style>
