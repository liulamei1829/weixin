<template>
  <div>
    <Topbar/>
    <Tabbar :active="3"/>
  </div>
</template>

<script>
import Topbar from '../components/Topbar'
import Tabbar from '../components/Tabbar'
export default {
  name: 'Index',
  components: { Topbar, Tabbar },
  data () {
    return {

    }
  }
}

</script>

<style>

</style>
