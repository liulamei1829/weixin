<template>
  <div class="index-container">
    <Topbar :titleText="titleText" :path="path" :totalModify="totalModify"/>
    <StateBar/>
    <MsgList :list="msgList"/>
    <Tabbar :active="0"/>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar'
import Tabbar from '../../components/Tabbar'
import StateBar from './StateBar'
import MsgList from './MsgList'
export default {
  name: 'Index',
  components: { Topbar, Tabbar, StateBar, MsgList },
  mounted () {
    // ajax
    setTimeout(() => {
      this.msgList = [
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        },
        {
          src: require('../../assets/liwenjie.png'),
          name: '李文杰',
          time: 1560605640000,
          content: 'I love you'
        }
      ]
    }, 1000)
  },
  data () {
    return {
      titleText: '微信',
      path: require('../../assets/add.png'),
      totalModify: 0
    }
  }
}

</script>

<style scoped>
  .index-container{
    margin-bottom: 50px;
  }
</style>
