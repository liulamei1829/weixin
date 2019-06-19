<template>
  <div>
    <Topbar :titleText="titleText" :path="path"/>

    <Tabbar :active="1"/>
  </div>
</template>

<script>
import Topbar from '../../components/Topbar.vue'
import Tabbar from '../../components/Tabbar.vue'
export default {
  name: 'Address',
  components: { Topbar, Tabbar },
  data () {
    return {
      titleText: '通讯录',
      path: require('../assets/addFriend.png')
    }
  }
}
</script>

<style>

</style>
