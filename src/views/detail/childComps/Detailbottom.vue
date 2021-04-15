<template>
  <div class="detailbottom">
    <div class="detailbleft">
      <div class="detcon">
        <img src="~assets/img/客服.svg" />
        <div class="bottomvalue">客服</div>
      </div>
      <div class="detcon">
        <img src="~assets/img/店铺.svg" />
        <div class="bottomvalue">店铺</div>
      </div>
      <div class="detcon">
        <img src="~assets/img/收藏.svg" />
        <div class="bottomvalue">收藏</div>
      </div>
    </div>
    <div class="detailbright">
      <div class="bottom_l" @click="addTocart">加入购物车</div>
      <div class="bottom_r">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottom',
    methods: {
      addTocart(){
        this.$emit('addTocart')
      }
    },
  }
</script>

<style>
  .detailbottom {
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0px;
  }

  .detailbleft,
  .detailbright {
    display: inline-block;
    width: 50%;
    height: 49px;
    position: absolute;
  }
  .detailbright {
    margin-left: 50%;
  }

  .detcon {
    display: inline-block;
    width: 60px;
    height: 49px;
    font-size: 14px;
    text-align: center;
    background-color: white;
  }

  .detcon img {
    vertical-align: bottom;
  }
  .bottom_l,.bottom_r{
    width: 50%;
    height: 49px;
    display: inline-block;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
    }
   .bottom_l{
     background-color: #ffe817;
   }
   .bottom_r{
     background-color: #FF5777;
     color: white;
   }
</style>
