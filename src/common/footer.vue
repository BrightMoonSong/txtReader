<template lang="html">
<div class="footer">
  <span class="active">书架</span>
  <span>精选</span>
  <span>书库</span>
  <span>发现</span>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d9d9b9;
  color: #435634;
  display: flex;
  justify-content: space-around;
  span{
    line-height: 3em;
  }
  .active{
    color: #0624f6;
  }
}
</style>
