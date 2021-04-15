<template>
  <div class="goodslistitems">
    <img :src="degoods.image" />
    <div class="ff">
      <p class="gtitle">{{ degoods.title }}</p>
      <span class="gprice">{{ degoods.price }}</span>
      <span class="gcfav">{{ degoods.cfav }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoods',
    props: {
      degoods: {

      }
    }
  }
</script>

<style>
  .goodslistitems {
    width: 48%;
    height: 280px;
    display: inline-block;
    margin-left: 1.3%;
    position: relative;
    font-size: 13px;
  }

  .goodslistitems img {
    position: absolute;
    width: 100%;
    height: 240px;
    border-radius: 5px;
  }

  .ff {
    width: 100%;
    position: absolute;
    height: 40px;
    margin-top: 240px;
    text-align: center;
  }

  .gtitle {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 4px;
    white-space: nowrap;
  }

  .gprice {
    margin-right: 9px;
    color: pink;
  }

  .gprice::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: url(~assets/img/星.svg) no-repeat 2px -2px;
  }

  .gcfav {
    margin-left: 9px;
  }
</style>
