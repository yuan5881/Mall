<template>
  <div class="subcategories">
    <a :href="subcategoriess.link">
      <img :src="subcategoriess.image" alt="" @load="imgloadwc" />
      <div>{{ subcategoriess.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SubCategories",
  props: {
    subcategoriess: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgloadwc(){
      this.$bus.$emit("imgloadwc");
    }
  },
};
</script>

<style>
.subcategories img {
  width: 64px;
  height: 64px;
}
.subcategories {
  display: inline-block;
  padding: 10px 5px;
  margin-left: 9px;
}
.subcategories div{
    text-align: center;
    font-size: 3.2vw;
    margin-top: 20px;
}
</style>