<template>
  <div class="goods" >
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsitems="item"  />
  </div>
</template>


<script>
  import GoodsListItem from './GoodsListItem.vue';
  export default {
    name: "GoodsList",
    props: {
      goods: {
      },
    },
    components: {
      GoodsListItem,
    },
  };
</script>

<style>

</style>
