<template>
  <div class="cartlist">
    <scroll class="contentc" ref="scroll">
      <cart-listitem v-for="(item ,index) in cartlist" :key="index" :cartlist="item" />
    </scroll>
  </div>
</template>

<script>
  import CartListitem from './CartListItem.vue'
  import Scroll from 'components/common/scroll/Scroll'

  import { mapGetters } from 'vuex'
  export default{
    name:'CartList',
    components:{
      CartListitem,
      Scroll,
    },
    computed:{
      ...mapGetters(['cartlist'])
    },
    activated() {
      this.$refs.scroll.refresh();
    },
    updated() {
      this.$refs.scroll.refresh();
    },
    methods: {
    },
  }
</script>

<style>
  .cartlist{
    height: calc(100%  - 49px - 46px - 43px);
  }
  .contentc{
    height: 100%;
    overflow: hidden;
  }
</style>
