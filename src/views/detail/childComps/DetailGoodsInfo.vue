<template>
  <div class="detailgoodsinfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goodsbase">
      <p>{{ detailInfo.desc }}</p>
      <h4>{{ detailInfo.detailImage[0].key }}</h4>
    </div>
    <img
      v-for="(item, index) in detailInfo.detailImage[0].list"
      :src="item"
      :key="index"
      @load="goodsbaseload"
      alt=""
    />
  </div>
</template>
<script>
export default {
  name: "DetailGoddsInfo",
  data() {
    return {
      goodscon: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goodsbaseload() {
      if (++this.goodscon == this.detailInfo.detailImage[0].list.length) {
        this.$emit("goodsbaseload");
      }
    },
  },
};
</script>

<style>
.detailgoodsinfo img {
  width: 100%;
}
.goodsbase {
  padding: 0 10px 0 10px;
}
.goodsbase p {
  padding: 5px 0 5px 0px;
}
</style>