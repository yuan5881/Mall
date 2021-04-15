<template>
  <tab-bar>
    <tab-bar-item path="/home" isactiveColor="#f9a3ca">
      <img slot="item-icon" src="~assets/img/首页.svg" />
      <img slot="item-icon-active" src="~assets/img/首页-active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" isactiveColor="#f9a3ca">
      <img slot="item-icon" src="~assets/img/分类.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/分类-active.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" isactiveColor="#f9a3ca">
      <img slot="item-icon" src="~assets/img/购物车.svg" />
      <img slot="item-icon-active" src="~assets/img/购物车-active.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" isactiveColor="#f9a3ca">
      <img slot="item-icon" src="~assets/img/我.svg" />
      <img slot="item-icon-active" src="~assets/img/我-active.svg" />
      <div slot="item-text">我</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>
<style>
</style>
