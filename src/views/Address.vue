<template>
  <div>
    <Topbar :titleText="titleText" :path="path"/>
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'
export default {
  name: 'Address',
  components: { Topbar },
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
