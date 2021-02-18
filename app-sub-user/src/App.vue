<template>
  <div id="appSubA">
    <p v-if="isQiankun">
      <span @click="$appRoutePush('/app-sub-chart/about')">app-sub-chart About</span>
      <user-main-aaa></user-main-aaa>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  methods: {},
}
</script>

<style>
#appSubA {
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
span{
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: underline;
}
</style>
