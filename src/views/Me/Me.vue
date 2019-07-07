<template>
  <div>
    <Tabbar :active="3"/>
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar'
export default {
  name: 'Me',
  components: { Tabbar },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
