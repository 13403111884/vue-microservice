<template>
  <div class="box">
    <header>
      <router-link style="margin-left: 20px" to="/app-vue-hash">app-vue-hash</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-hash/about">app-vue-hash/about</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history">app-vue-history</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history/about">app-vue-history/about</router-link>
      <router-link style="margin-left: 20px" to="/app-vue-history">app-vue-history</router-link>
      <router-link style="margin-left: 20px" to="/Setting">Setting</router-link>
      <router-link style="margin-left: 20px" to="/">Home</router-link>
    </header>
    <p>路由：{{ routeName }}</p>
    <router-view/>
    <div id="appContainer"></div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  watch,
  provide, // 设置一个被注入到应用范围内所有组件中的值
  getCurrentInstance,
} from 'vue'
export default {
  name: 'App',
  setup(props) {
    // provide('keyData', {a: 0, b: 0}) // 注入
    const { ctx }: any = getCurrentInstance()
    let routeName = ref('--')
    routeName.value = ctx.$router.currentRoute.value.name

    watch(
      () => ctx.$router.currentRoute.value,
      () => {
        console.log(ctx.$router.currentRoute.value)
        routeName.value = ctx.$router.currentRoute.value.name
      }
    )
    return {
      routeName,
    }
  },
}
</script>

<style lang="stylus" scoped>
.box {
  .img {
    width: 180px;
  }
}
</style>
