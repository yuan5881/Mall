<template>
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="comtop">
      <span class="comsp1">用户评价</span><span class="comsp2">更多</span>
    </div>
    <div class="user">
      <img :src="comment[0].user.avatar" />
      <span>{{ comment[0].user.uname }}</span>
      <p>{{ comment[0].content }}</p>
      <p>
        <span>{{ comment[0].created | datec }}</span>
        <span>{{ comment[0].style }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {formatTime} from 'common/utils.js'
export default {
  name: "DetailComment",
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters:{
      datec(val){
		    return formatTime(val,'Y-M-D')
      }
  },
};
</script>

<style>
.comment {

}
.comtop {
  color: black;
  background-color: skyblue;
  margin-top: 10px;
  height: 44px;
  line-height: 44px;
}
.comsp1 {
  float: left;
  padding-left: 10px;
}
.comsp2 {
  float: right;
  padding-right: 15px;
}
.user {
  padding-left: 10px;
  padding-top: 10px;
}
.user span {
  vertical-align: middle;
}
.user p {
  padding-top: 10px;
}
.user img {
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.user p span:last-of-type{
    margin-left: 20px;
}
</style>
