<template>
  <div class="container">
    <div style="display: table"></div>
    <div class="top">
      <span class="title">
        {{titleText}}
        <span v-if="totalModify">({{totalModify}})</span>
      </span>
      <img :src="path" class="pic-add">
    </div>
    <div class="bottom" v-if="!isHideSearch">
      <div class="search">
        <img src="../assets/search.png" class="pic-search">
        <span class="span-search">搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    isHideSearch: Boolean,
    titleText: String,
    path: String,
    totalModify: Number
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .container{
    width: 340px;
    height: 85px;
    background-color: #e6e6e6;
  }
  .top{
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: #e6e6e6;
    z-index: 999;
  }
  .title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 16px;
  }
  .pic-add{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    margin-right: 15px;
    width: 20px;
    height: 20px;
  }
  .bottom{
    margin-top: 40px;
    position: relative;
    height: 40px;
  }
  .search{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
    height:30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .span-search{
    color: #ddd;
    font-size: 17px;

  }
  .pic-search{
    width: 18px;
    height: 18px;
  }
</style>
