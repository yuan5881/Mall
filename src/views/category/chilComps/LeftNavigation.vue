<template>
  <div class="LeftNavigation">
    <scroll class="conter" ref="scroll">
      <div
        class="leftitem"
        v-for="(item, index) in leftnavdata"
        :key="index"
        @click="itemcolorclick(index)"
        :class="{ isactive: currerindex === index }"
      >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "LeftNavigation",
  props: {
    leftnavdata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currerindex: 0,
    };
  },
  methods: {
    itemcolorclick(index) {
      this.currerindex = index;
      this.$emit('itemcolorclick',index)
      this.$bus.$emit("leftclick");
    },
  },
  created() {
    
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  components: {
    Scroll,
  },
};
</script>

<style>
.LeftNavigation {
  display: inline-block;
  width: 28%;
  height:100%;
  background-color: #f7f7f7;
}
.conter {
  height: 100%;
  overflow: hidden;
}
.leftitem {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 15px;
}
.isactive {
  background-color: white;
  color: red;
  border-left: 2px solid red;
  font-weight: 700;
  font-size: 3.73333vw;
}
</style>