<template>
  <div id="app">
<van-button type="default">默认按钮</van-button>
    <router-view/>
    <div class="box"></div>
  </div>
</template>

<style lang="less">
.box {
  width: 750px;
  height: 60px;
  background-color: red;
}
</style>
