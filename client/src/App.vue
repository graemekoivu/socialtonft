<template>
  <div>
    <Head msg="Welcome to SocialToNFT!"></Head>
    <HomeTabs v-if="!userpage"></HomeTabs>
    <Tabs v-else></Tabs>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import HomeTabs from './components/HomeMenu.vue'
import Tabs from './components/Tabs.vue'

export default {
  name: 'App',
  data() {
    return {
      userpage: false
    }
  },
  components: {
    Head,
    HomeTabs,
    Tabs
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
