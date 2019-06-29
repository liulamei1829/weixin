<template>
  <div>
    <div v-for="(group, gIndex) in list" :key="gIndex">
        <Initial v-if="group.initial" :initial="group.initial"/>
        <ContactsItem v-for="(item,index) in group.data" :key="index" :item="item"/>
    </div>

  </div>
</template>

<script>
import ContactsItem from './ContactsItem'
import Initial from './Initial'
export default {
  name: 'ContactsList',
  components: { ContactsItem, Initial },
  props: ['list'],
  mounted () {
    console.log(this.list)
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
