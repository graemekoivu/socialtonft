<template>
  <div>
    <Navigation></Navigation>
    <Head msg="Welcome to SocialToNFT!"></Head>
    <HomeTabs v-if="!userpage"></HomeTabs>
    <Tabs v-else></Tabs>
    <Display v-if="display"></Display>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Head from './components/Head.vue'
import HomeTabs from './components/HomeMenu.vue'
import Tabs from './components/Tabs.vue'
import Display from './components/Display.vue'

let urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

export default {
  name: 'App',
  data() {
    return {
      userpage: false,
      display: false,
      code,
      
    }
  },
  components: {
    Navigation,
    Head,
    HomeTabs,
    Tabs,
    Display
  },
  created() {
    //evaluate url params...
    if (urlParams.get('code')) {
      this.display = true;
    } else {
      this.display = false;
    }
    console.log(code)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
