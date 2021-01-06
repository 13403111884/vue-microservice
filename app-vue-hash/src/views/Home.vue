<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <span @click="changeParentState">主项目的数据：{{ $appVuexGetters }},点击变为2</span>
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
  computed: {
    parent: () => $appVuex.state.commonData.parent
  },
  mounted() {},
  methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$appVuex.commit('setCommonData', { parent: 2 });
      }
    }
  },
}
</script>
