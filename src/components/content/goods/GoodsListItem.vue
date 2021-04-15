<template>
  <div class="goodslistitems">
    <img v-lazy="showimage" @load="imageLoad" @click="itemxq" />
    <div class="ff">
      <p class="gtitle">{{ goodsitems.title }}</p>
      <span class="gprice">{{ goodsitems.price }}</span>
      <span class="gcfav">{{ goodsitems.cfav }}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "GoodsListItems",
  props: {
    goodsitems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageitemLoad");
    },
    itemxq() {
      this.$router.push("/detail/" + this.goodsitems.iid);
    },
  },
  computed: {
    showimage() {
      return this.goodsitems.img || this.goodsitems.image || this.goodsitems.show.img ;
    },
  },
};
</script>

<style>
.goodslistitems {
  width: 48%;
  height: 260px;
  display: inline-block;
  margin-left: 1.3%;
  position: relative;
  font-size: 13px;
}

.goodslistitems img {
  position: absolute;
  width: 100%;
  height: 220px;
  border-radius: 5px;
}

.ff {
  width: 100%;
  position: absolute;
  height: 40px;
  margin-top: 220px;
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
