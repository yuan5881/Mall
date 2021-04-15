<template>
<div class="cart">
    <nav-bar class="cart-top">
      <div slot="center">购物车({{cartlength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import cartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components:{
    NavBar,
    cartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartlength','cartlist'])
  }
};
</script>


<style>
.cart{
  height: 100vh;
}

.cart-top{
  background-color: #f9a3ca;
  color: white;
}


</style>
