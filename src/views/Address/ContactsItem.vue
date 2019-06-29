<template>
  <div class="container">
    <div class="left">
      <img :src="item.src" class="avatar">
    </div>
    <div class="right">
      <p class="title">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsItem',
  props: {
    item: {
      src: String,
      name: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 47px;
    display: flex;
  }
  .left{
    width: 55px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right{
    flex: 1;
    height: 47px;
    border-bottom: 0.5px solid #ddd;
    display: flex;
    align-items: center;
  }
  .avatar{
    width: 34px;
  }
  .title{
    font-size: 15px;
    color: #000;
  }
</style>
