<template>
  <div>
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

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
  },
  created() {
    //evaluate url params...
    if (urlParams.get('code')) {
      this.$router.push('/create')
    } else {
      this.display = false;
    }
    //console.log(code)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
