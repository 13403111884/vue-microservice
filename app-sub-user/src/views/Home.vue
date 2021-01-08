<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <span @click="changeParentState">主项目的数据：{{appData.parent}},点击++</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      appData: {
        parent: 0
      },
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  mounted() {
    this.$onGlobalStateChange((state, prev) => {
      Object.keys(state).forEach(key => {
        this.appData[key] = state[key]
      })
    })
  },
  methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$setGlobalState({parent: this.appData.parent+1})
      }
    }
  },
}
</script>
