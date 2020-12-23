<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    {{keyData}}
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script>
import {
  reactive, // 用于返回对象的深层响应式代理
  ref, // 用于返回非对象值的响应式代理
  onMounted,
  inject
} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props, context) {
    console.log(props, context)
    const count = ref(0)
    const keyData = inject('keyData') 
    onMounted(() => {
      console.log('onMounted')
    })


    return {
      count,
      keyData
    }
  }
}
</script>
