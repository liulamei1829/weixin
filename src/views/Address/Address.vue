<template>
  <div>
    <Topbar :titleText="titleText" :path="path"/>
    <ContactsList :list="list"/>
    <AlphabetNav />
    <Tabbar :active="1"/>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'

import Topbar from '../../components/Topbar.vue'
import Tabbar from '../../components/Tabbar.vue'
import AlphabetNav from './AlphabetNav.vue'
import ContactsList from './ContactsList.vue'

const { baseUrl } = config

export default {
  name: 'Address',
  components: { Topbar, Tabbar, AlphabetNav, ContactsList },
  data () {
    return {
      titleText: '通讯录',
      path: require('../../assets/addFriend.png'),
      list: [
        {
          initial: '',
          data: [
            { src: require('../../assets/newFriends.png'), name: '新的朋友' },
            { src: require('../../assets/groupChat.png'), name: '群聊' },
            { src: require('../../assets/tags.png'), name: '标签' },
            { src: require('../../assets/officialAccounts.png'), name: '公众号' }
          ]
        }
      ]
    }
  },
  mounted () {
    axios.get(`${baseUrl}address/contactsList`).then(res => {
      this.list = this.list.concat(res.data.code === 0 ? res.data.data : [])
    })
  }
}
</script>

<style>

</style>
