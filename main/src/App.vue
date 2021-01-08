<template>
  <div id="app">
    <header>
      <router-link style="margin-left: 20px" to="/app-sub-user">app-sbu-a</router-link>
      <router-link style="margin-left: 20px" to="/app-sub-user/about">app-sbu-a/about</router-link>
      <router-link style="margin-left: 20px" to="/app-sub-chart">app-sbu-b</router-link>
      <router-link style="margin-left: 20px" to="/app-sub-chart/about">app-sbu-b/about</router-link>
      <router-link style="margin-left: 20px" to="/about">about</router-link>
      <router-link style="margin-left: 20px" to="/">Home</router-link>
    </header>
    <button @click="setState">全局数据点击--</button><button @click="setStateA">全局数据增加a，并把点击变得的数据赋值给a</button>
    {{$appData.parent}}
    <router-view v-if="!$route.path.includes('app-sub-')" />
    <div v-else id="appContainer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    setState () {
      this.$appData.parent = this.$appData.parent-1
    },
    setStateA () {
      this.$appData.a = this.$appData.parent
    }
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
