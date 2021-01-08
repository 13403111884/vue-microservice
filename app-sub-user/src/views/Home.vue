<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <span @click="changeParentState">主项目的数据：{{$appData && $appData.parent}} {{$appData && $appData.a}},点击++</span>
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
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  mounted() {
  },
  methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$appData.parent = this.$appData.parent+1
      }
    }
  },
}
</script>
