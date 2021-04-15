<template>
   <div class="tab-bar-item" @click="itemclick">
   <div v-if="!isActive"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-active"></slot></div>
   <div  :style="isActiveStyle"><slot name="item-text"></slot></div>
   </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    isactiveColor:{
      type:String,
      default:'red',
    }
  },
  data() {
    return {
      // isActive:true,
    }
  },
  methods: {
    itemclick: function () {
      this.$router.replace(this.path);
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveStyle(){
      return this.isActive ? {color:this.isactiveColor} : {}
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  background-color: #F7F7F7;
  font-size: 13px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
.tab-bar-item img {
  vertical-align: middle;
}
</style>
