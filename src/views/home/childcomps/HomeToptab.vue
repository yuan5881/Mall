<template>
  <div id="hometoptab">
    <div class="homettabitem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeToptab",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
#hometoptab {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 13px;
  background-color: white;
}
.homettabitem img {
  width: 90%;
  flex: 1;
}
</style>