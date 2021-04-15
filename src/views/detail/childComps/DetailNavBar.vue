<template>
  <div class="detbar">
    <nav-bar class="detail-nav-barl">
      <div slot="left" class="navbarleft" @click="backclick">
        <img src="~assets/img/左箭头.svg" />
      </div>
      <div
        slot="center"
        class="titles"
        :class="{ colortit: currentindex === index }"
        v-for="(item, index) in titles"
        :key="index"
        @click="titelclick(index)"
      >
        {{ item }}
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titelclick(index) {
      this.currentindex = index;
      this.$emit("titelclick", index);
    },
    backclick() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style>
.titles {
  font-size: 15px;
  width: 50px;
  display: inline-block;
  color: black;
}

.colortit {
  color: rgb(224, 82, 105);
}
.navbarleft img {
  width: 35px;
  height: 35px;
  top: 5px;
  left: 10px;
  position: relative;
}
.navbarleft {
  height: 46px;
}
.detail-nav-barl {
  box-shadow: 0 0 2px #afafafed;
  display: flex;
}

.detbar {
  height: 46px;
}
</style>