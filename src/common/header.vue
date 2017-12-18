<template lang="html">
  <div class="header">
    <h3>{{titleName}}</h3>
  </div>
</template>

<script>
export default {
  props: ['titleName']
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: #d9d9b9;
    h3{
      text-align: center;
      font-weight: 500;
      line-height: 2em;
      color: #435634;
    }
}
</style>
