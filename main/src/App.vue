<template>
  <div id="app">
    <header>
      <router-link style="margin-left: 20px" to="/app-vue-hash">app-vue-hash</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-hash/about">app-vue-hash/about</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history">app-vue-history</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history/about">app-vue-history/about</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history">app-vue-history</router-link>
      <router-link style="margin-left: 20px" to="/Setting">Setting</router-link>
      <router-link style="margin-left: 20px" to="/">Home</router-link>
    </header>
    <div id="appContainer"></div>
    <router-view/>
  </div>
</template>

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
