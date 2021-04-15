<template>
  <div class="base-info" v-if="Object.keys(goodsbasedata).length !== 0">
    <div class="pinfo1">{{ goodsbasedata.title }}</div>
    <p class="pinfo2">
      <span class="sp1">{{ goodsbasedata.newPrice }}</span>
      <span class="sp2">{{ goodsbasedata.oldPrice }}</span>
      <span
        class="sp3"
        :style="{ 'background-color': goodsbasedata.discountBgColor }"
        v-if="goodsbasedata.discount"
        >{{ goodsbasedata.discount }}</span
      >
    </p>
    <div class="info-other" >
      <span>{{ goodsbasedata.columns[0] }}</span>
      <span>{{ goodsbasedata.columns[1] }}</span>
      <span>{{ goodsbasedata.columns[goodsbasedata.columns.length - 1] }}</span>
    </div>
    <div class="services_info">
      <span v-for="index in goodsbasedata.services.length - 1" :key="index">
        <img :src="goodsbasedata.services[index - 1].icon" />
        <span>{{ goodsbasedata.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsbasedata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    isinfoshow() {
      Object.keys(this.goodsbasedata) !== 0;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style>
.pinfo1 {
  font-size: 16px;
  font-weight: 550;
  margin-top: 15px;
  padding: 0 10px 0 10px;
}
.pinfo2 {
  margin-top: 10px;
}
.sp1 {
  font-size: 25px;
  color: var(--color-tint);
  padding-left: 10px;
}
.sp2 {
  text-decoration: line-through;
  padding-left: 8px;
  color: #ccc;
}
.sp3 {
  border-radius: 7px;
  color: white;
  padding: 2px;
}
.info-other,
.services_info {
  border-bottom: 1px #ccc solid;
  margin: 15px 10px 0 10px;
  padding-bottom: 10px;
  display: flex;
}
.info-other span {
  color: #ccc;
  flex: 1;
}
.services_info {
  vertical-align: middle;
  font-size: 15px;
}
.services_info img {
  width: 20px;
  vertical-align: middle;
  flex: 1;
}
.services_info span {
  vertical-align: middle;
  flex: 1;
}
</style>