<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.NavBar {
  height: 46px;
  line-height: 46px;
  text-align: center;
}
.center {
  flex: 1;
}
.left,
.right {
  width: 60px;
}
</style>
