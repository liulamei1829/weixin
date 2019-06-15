<template>
  <div>
    <MsgItem v-for="(item,index) in list" :key="index" :item="item"
    />
  </div>
</template>

<script>
import MsgItem from '../../components/MsgItem'
export default {
  name: 'MsgList',
  components: { MsgItem },
  props: ['list'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
