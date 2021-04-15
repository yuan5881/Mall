<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BSscroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: true,
      HWCompositing:true
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
};
</script>
<style>
</style>