<template>
  <div class="rightcontent" v-if="Object.keys(categoryData).length !== 0">
    <scroll class="conter" ref="scroll">
      <sub-categories v-for="(item, index) in categoryData[currerindex].subcategories.list" :key="index"
        :subcategoriess="item" />
      <tab-control :popularlist="['综合', '新品', '销量']" @tabclick="tabclick" />
      <goods-list :goods="categoryData[currerindex].categoryDetail.pop" class="goodscategory"  />
    </scroll>
  </div>
</template>

<script>
  import SubCategories from "./SubCategories";

  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  export default {
    name: "RightContent",
    components: {
      Scroll,
      SubCategories,
      TabControl,
      GoodsList,
    },
    props: {
      categoryData: {
        type: Object,
        default () {
          return {};
        },
      },
      currerindex: {},
    },
    data() {
      return {
        Detailindex: 0,
        tabarr: ['pop', 'new', 'sell'],
      }
    },
    methods: {
      debounce(func, delay) {
        let timer = null;
        return function(...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      },
      tabclick(index) {
        this.Detailindex = index
        const vb = this.tabarr
        console.log(this.categoryData[this.currerindex].categoryDetail.new)
      },
      imgloadwc(){
        this.$refs.scroll.refresh()
      },
    },
    updated() {
      const refresh = this.debounce(this.$refs.scroll.refresh, 100);
      const scrTo = this.debounce(this.$refs.scroll.scrollTo,100)
      this.$bus.$on("imgloadwc", () => {
        refresh()
      });
      this.$bus.$on('leftclick',() =>{
        scrTo(0,0,0);
      })
    },
    mounted() {
    },
  };
</script>

<style>
  .rightcontent {
    display: inline-block;
    width: 72%;
    height: 100%;
    background-color: white;
    overflow: hidden;
  }

  .conter {
    height: 100%;
    overflow: hidden;
  }
</style>
