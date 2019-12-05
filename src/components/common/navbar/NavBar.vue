<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="less">
  .nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    .right,.left{
      width: 55px;
    }
    .center{
      flex: 1;
    }
  }
</style>