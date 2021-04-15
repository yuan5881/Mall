<template>
  <div class="detail">
    <detail-nav-bar @titelclick="titelclick" ref="detnav" />
    <scroll
      class="contentd"
      :probeType="3"
      ref="scroll"
      @scroll="contentscroll"
    >
      <detail-swiper
        class="detail-swiper"
        :topimage="topImages"
        ref="detailswiper"
      />
      <detail-base-info :goodsbasedata="goods" />
      <detail-shop-info :shops="shops" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @goodsbaseload="goodsbaseload"
      />
      <detail-goods-params-info :goodsinfo="goodsinfo" ref="params" />
      <detail-comment :comment="comment" ref="comment" />
      <div ref="detailgoods" class="detailg">
        <detail-goods
          v-for="(item, index) in goodsCommend"
          :key="index"
          :degoods="item"
        />
      </div>
    </scroll>
    <detail-bottom @addTocart="addTocart" />
    <back-top @click.native="backclick" v-show="isshowgotop" />
    <toast />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailGoodsParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailComment from "./childComps/DetailComment.vue";
import DetailBottom from "./childComps/Detailbottom.vue"
import Toast from "components/common/toast/Toast"



import Scroll from "components/common/scroll/Scroll";
import DetailGoods from "./childComps/DetailGoods";

import {backTopMixin} from 'common/main'

import {mapActions} from 'vuex'

import {
  getdatail,
  Goods,
  Shop,
  GoodsParams,
  getreCommend,
} from "network/datail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsinfo: {},
      comment: [],
      goodsCommend: {},
      navTop: [],
      currentindex: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParamsInfo,
    DetailComment,
    DetailGoods,
    DetailBottom,
    Toast,
  },
  mixins:[backTopMixin],
  methods: {
    ...mapActions(['addCart']),
    goodsbaseload() {
      this.$refs.scroll.refresh();
      this.navTop = [];
      this.navTop.push(0);
      this.navTop.push(this.$refs.params.$el.offsetTop);
      this.navTop.push(this.$refs.comment.$el.offsetTop);
      this.navTop.push(this.$refs.detailgoods.offsetTop);
      this.navTop.push(Number.MAX_VALUE);
      console.log("图片加载完成");
    },
    titelclick(index) {
      this.$refs.scroll.scrollTo(0, -this.navTop[index], 100);
    },
    contentscroll(position) {
      let positiony = -position.y;
      let length = this.navTop.length;
      for (let i = 0; i < length-1; i++) {
        if ( (positiony>=this.navTop[i] && positiony<this.navTop[i+1])) {
           this.currentindex = i
           this.$refs.detnav.currentindex=this.currentindex
        }
      }
      this.listenshowBackTop(positiony);
    },
    addTocart(){
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.$store.dispatch('addCart',product).then( res =>{
      //   console.log(res)
      // })
      this.addCart(product).then( res =>{
        this.$toast.isShow(res,1500)
      })

    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getdatail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods();
      this.shops = new Shop();
      this.goodsinfo = new GoodsParams();
      this.goods.constrector(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shops.constrectorshop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsinfo.constrectorgoods(
        data.itemParams.info,
        data.itemParams.rule
      );
      this.comment = data.rate.list;

      getreCommend().then((res) => {
        this.goodsCommend = res.data.list;
        console.log(this.goodsCommend);
      });
    });
  },
  updated() {
    this.$refs.scroll && this.$refs.scroll.scroll.refresh();
  },
  mounted() {},
};
</script>

<style>
.detail-swiper {
  width: 100%;
  height: 300px;
}
.detail {
  position: relative;
  z-index: 12;
  background-color: white;
  height: 100vh;
}
.contentd {
  width: 100%;
  height: calc(100% - 46px - 49px);
  position: relative;
  overflow: hidden;
}
.detailg{
  padding-bottom: 49px;
}
</style>
