<template>
  <div class="container">
    <div class="container-item" v-for='(item,index) in list' :key='index' @click='changePage' :active='active'>
      <img :src="item.activeImg" v-if="active === index ? true : false">
      <img :src="item.normalImg" v-else>
      <span :id="item.id">{{item.text}}</span>
      <div class="modify">{{item.num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: [],
  data () {
    return {
      active: 0,
      list: [
        {
          normalImg: require('../assets/weixin.png'),
          activeImg: require('../assets/weixin_active.png'),
          id: 'weixin',
          text: '微信',
          num: 1
        },
        {
          normalImg: require('../assets/tongxunlu.png'),
          activeImg: require('../assets/tongxunlu_active.png'),
          id: 'tongxunlu',
          text: '通讯录',
          num: 1
        },
        {
          normalImg: require('../assets/find.png'),
          activeImg: require('../assets/find_active.png'),
          id: 'find',
          text: '发现',
          num: 1
        },
        {
          normalImg: require('../assets/me.png'),
          activeImg: require('../assets/me_active.png'),
          id: 'me',
          text: '我',
          num: 1
        }
      ]
    }
  },
  methods: {
    changePage () {

    }
  }
}
</script>

<style scoped>
  .container {
    position: fixed;
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
