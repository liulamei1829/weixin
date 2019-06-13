<template>
  <div>
    <Topbar :titleText="titleText" :path="path" :totalModify="totalModify"/>
    <StateBar/>
    <Tabbar :active="3"/>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar'
import Tabbar from '../../components/Tabbar'
import StateBar from './StateBar'
export default {
  name: 'Index',
  components: { Topbar, Tabbar, StateBar },
  data () {
    return {
      titleText: '微信',
      path: require('../../assets/add.png'),
      totalModify: 0
    }
  }
}

</script>

<style>

</style>
