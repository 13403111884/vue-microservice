<template>
  <div>
    <h1>This is a setting page</h1>
    <button @click="editCount">count++</button>
    <p>store count is: {{ count }}</p>
    <p>route: {{routeName}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref, computed, nextTick } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Setting",
  setup (props, context) {
    const { ctx }: any = getCurrentInstance()
    console.log(ctx.api.apiTest({}), ctx.$root.$store.state.count, ctx.$router.currentRoute.value.name)
    const store = useStore()
    const router = useRouter()
    let routeName = ref(router.currentRoute.value.name)
    const count = computed(() => ctx.$root.$store.state.count)
    const editCount = () => {
      store.commit('increment')
    }
    return {
      count,
      editCount,
      routeName
    }
  }
});
</script>
