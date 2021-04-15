<template>
  <div class="cartbottom">
    <div class="cartleft">
      <img
        src="~assets/img/勾.svg"
        v-if="isselectall"
        @click="btnshow"
        align="absmiddle"
      />
      <img
        v-else
        src="~assets/img/圆环.svg"
        @click="btnshow"
        align="absmiddle"
      />
      <p v-if="isselectall">全选</p>
      <p v-else>全不选</p>
    </div>
    <div class="cartcenter">
      <span>合计{{ totalprice }}</span>
    </div>
    <div class="Tosettleaccounts" @click="gosettlement">
      <span>去结算({{ settlement }})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  data() {
    return {
      ischeckshow: false,
    };
  },
  computed: {
    ...mapGetters(["cartlist"]),
    totalprice() {
      return (
        "￥" +
        this.cartlist
          .filter((item) => {
            return item.CheckButton;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    settlement() {
      return this.cartlist.filter((item) => item.CheckButton).length;
    },
    isselectall() {
      return this.cartlist.length === 0
        ? false
        : !this.cartlist.find((item) => !item.CheckButton);
    },
  },
  methods: {
    btnshow() {
      if (this.isselectall) {
        this.cartlist.filter((item) => (item.CheckButton = false));
      } else {
        this.cartlist.filter((item) => (item.CheckButton = true));
      }
    },
    gosettlement() {
      if (this.cartlist.length===0) {
        this.$toast.isShow("请添加商品");
      }else if(!this.settlement){
        this.$toast.isShow('请勾选商品')
        console.log(this.settlement)
      }
    },
  },
};
</script>

<style>
.cartbottom {
  display: flex;
  text-align: center;
  width: 100%;
  height: 43px;
  position:fixed;
  bottom: 49px;
  line-height: 43px;
  background-color: white;
}
.cartbottom img {
  width: 30px;
}
.cartbottom p {
  display: inline-block;
  height: 43px;
  padding-left: 5px;
}
.cartleft {
  width: 90px;
  margin-left: 10px;
}
.cartcenter {
  margin-left: 20px;
  margin-right: 10px;
}
.Tosettleaccounts {
  flex: 1;
  background-color: tomato;
}
</style>