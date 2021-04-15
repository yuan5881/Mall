<template>
  <div class="shopinfo" v-if="Object.keys(shops).length!==0">
    <div class="shoplogo">
      <img :src="shops.shopLogo" /><span>{{ shops.name }}</span>
    </div>
    <div class="shopbase">
      <div class="shopbaseXl">
        <p>
          <span>{{  Math.round((shops.cSells /10000) * 100) / 100}}万</span
          ><span>{{ shops.cGoods }}</span>
        </p>
        <p class="msshops"><span>总销量</span><span>全部宝贝</span></p>
      </div>
      <div class="shopdescribe">
        <p v-for="(item, index) in shops.score && shops.score" :key="index">
          {{ item.name }}
          <span v-if="item.isBetter" :class="{ shopg: item.isBetter }">{{ item.score }}</span>
          <span v-else class="shopd">{{ item.score }}</span>
          <span v-if="item.isBetter" :class="{ shopg: item.isBetter }">高</span>
          <span v-else class="shopd">低</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      },
    },
    Better: null,
  },
  computed: {
  },
};
</script>

<style>
.shopinfo {
  font-size: 18px;
  margin: 0px 10px 0 10px;
}
.shoplogo img {
  width: 50px;
  border-radius: 50%;
  margin-top: 5px;
  vertical-align: middle;
}
.shopbaseXl p span {
  display: inline-block;
  text-align: center;
  width: 50%;
  margin-top: 10px;
}
.shopbase {
  height: 130px;
  position: relative;
}
.shopbaseXl {
  width: 48%;
  height: 130px;
  padding-top: 30px;
  position: absolute;
}
.msshops {
  font-size: 15px;
}
.shopdescribe {
  height: 130px;
  display: inline-block;
  position: absolute;
  margin: 0 0 0 48%;
  padding-top: 30px;
  width: 52%;
  font-size: 15px;
}
.shopdescribe p {
  margin: 4px 10px 0 10px;
}
.shopdescribe p span {
    display: inline-block;
    width: 30px;
    text-align: center;
    margin-left: 15px;
}
.shopg {
  background-color: red;
}
.shopd {
  background-color: yellowgreen;
}
</style>
