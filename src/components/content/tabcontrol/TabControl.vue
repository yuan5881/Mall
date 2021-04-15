<template>
  <div class="TabControl">
    <div class="tabconItem" :class="{iser:index===popularcs}" v-for="(item,index) in popularlist" :key="index"
      @click="popularclick(index)"><span>{{ item }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      popularlist: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        popularcs: 0,
      }
    },
    methods: {
      popularclick(index) {
        this.popularcs = index,
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style>
  .TabControl {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    text-align: center;
    background-color: white;
    font-size: 15px;
  }

  .tabconItem {
    flex: 1;
  }

  .iser {
    color: #FF5777;
  }

  .iser span {
    border-bottom: #FF5777 solid 3px;
    padding: 0 8px 13px 8px;
  }
</style>
