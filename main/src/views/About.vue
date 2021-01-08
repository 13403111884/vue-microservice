<template>
  <div class="about">
    <h1>This is app-sub-chart about page</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    window.a = 1;
  },
}
</script>
<style>
/* 测试全局css污染 */
h1{
  color: red;
}
</style>