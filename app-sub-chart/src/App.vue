<template>
  <div id="app">
    <router-link to="/" >首页</router-link>
    <router-link :to="{ name: 'uuuuuuuu' }" >关于</router-link>
    <a @click="$appRoutePush({ name: 'oooooo' })" >父级关于</a>
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
