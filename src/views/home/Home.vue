<template>
  <div id="home">
    <nav-bar id="home-navbar">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :popularlist="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      v-show="isoffsetTop1"
    />
    <scroll
      :class="{ wrapperss: tty }"
      ref="scroll"
      :probeType="3"
      @scroll="scrollcontent"
      @pullingUp="pullingUpnext"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-toptab :recommends="recommends"></home-toptab>
      <popular-thisweek />
      <tab-control
        :popularlist="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrol2"
      />
      <goods-list :goods="goods[tabclickobj].list" ref="goodsl" />
    </scroll>
    <back-top @click.native="backclick" v-show="isshowgotop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import HomeToptab from "./childcomps/HomeToptab";
import PopularThisweek from "./childcomps/PopularThisweek";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import { mapGetters } from "vuex";

import { backTopMixin } from "common/main";
import { selectdatahome, gethomegoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      tabclickobj: "pop",
      // isshowgotop: false,
      isoffsetTop1: false,
      tty: null,
      positiony: 0,
      arr: [],
      tabindex: 0,
    };
  },
  created() {
    this.selectdatahome(),
      this.gethomegoods("pop"),
      this.gethomegoods("new"),
      this.gethomegoods("sell");
    // 1.15.2
  },
  mounted() {
    this.tabclick(0);
  },

  methods: {
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    scrollcontent(position) {
      const positiony = -position.y;
      this.listenshowBackTop(positiony);
      this.isoffsetTop1 = -position.y > this.swiperImageLoad();
      this.tty = this.swiperImageLoad() < -position.y ? true : false;
      this.positiony = positiony;
    },
    pullingUpnext() {
      this.gethomegoods(this.tabclickobj);
      this.$refs.scroll.scroll.refresh();
    },
    tabclick(index) {
      this.tabindex = index;
      switch (index) {
        case 0:
          this.tabclickobj = "pop";
          this.$refs.scroll.scrollTo(0,-this.$store.state.homescrolltab[this.tabindex] || -this.swiperImageLoad(),0);
          this.$refs.scroll.refresh();
          break;
        case 1:
          this.tabclickobj = "new";
          this.$refs.scroll.scrollTo(0,-this.$store.state.homescrolltab[this.tabindex] || -this.swiperImageLoad(),0);
          this.$refs.scroll.refresh();
          break;
        case 2:
          this.tabclickobj = "sell";
          this.$refs.scroll.scrollTo(0,-this.$store.state.homescrolltab[this.tabindex] || -this.swiperImageLoad(),0);
          this.$refs.scroll.refresh();
          break;
      }
      this.$refs.tabcontrol1.popularcs = index;
      this.$refs.tabcontrol2.popularcs = index;
    },
    selectdatahome() {
      selectdatahome().then((res) => {
        (this.banners = res.data.banner.list),
          (this.recommends = res.data.recommend.list);
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(type, page).then((res) => {
        if (res == false) return;
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll && this.$refs.scroll.finishPullUp();
        this.$refs.scroll.scroll.refresh();
      });
    },
    swiperImageLoad() {
      return this.$refs.tabcontrol2.$el.offsetTop;
    },
    addarr() {
      this.arr[this.tabindex] = this.positiony;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeToptab,
    PopularThisweek,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins: [backTopMixin],
  updated() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imageitemLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,-this.$store.state.homescrolltab[this.tabindex],0);
  },
  deactivated() {
    this.addarr();
    this.$store.commit("ghj", this.arr);
  },
};
</script>


<style scoped>
#home {
  height: 100vh;
}

.center {
  color: white;
}

#home-navbar {
  background-color: #f9a3ca;
}

body {
  margin: 0;
  padding: 0;
}

.wrapper {
  width: 100%;
  height: calc(100% - 95px);
  overflow: hidden;
  margin-top: 0px;
  position: absolute;
  padding-bottom: 100px;
}

.wrapperss {
  width: 100%;
  height: calc(100% - 145px);
  overflow: hidden;
  margin-top: 0px;
  position: absolute;
}
</style>
