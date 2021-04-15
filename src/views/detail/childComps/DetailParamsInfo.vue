<template>
  <div class="paramsinfo" v-if="Object.keys(goodsinfo).length !==0">
    <table class="tbe">
        <tr v-for="(item,index) in goodsinfo.rule[0] " :key="index">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
            <td>{{ item[3] }}</td>
            <td>{{ item[4] }}</td>
        </tr>
    </table>
    <table>
      <tr v-for="(item, index) in goodsinfo.infos" :key="index">
        <td class="t1">{{ item.key }}</td>
        <td class="t2">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    goodsinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
}
.tbe{
    border-bottom: 1px skyblue solid;
}
td {
  height: 40px;
}
.t1 {
  width: 80px;
}
.t2 {
  color: rgb(224, 82, 105);
}
</style>