<template>
  <div class="cartlistitem">
    <div class="imgcheck">
      <img  src="~assets/img/勾.svg" v-if="cartlist.CheckButton" @click="isshowcheck" />
      <img v-else  src="~assets/img/圆环.svg" @click="isshowcheck" />
    </div>
    <img :src="cartlist.image" alt="" />
    <div class="cartc">
      <p>{{ cartlist.title }}</p>
      <p>{{ cartlist.desc }}</p>
      <div class="lrbottom">
        <span class="p1">￥{{ cartlist.price }}</span>
        <span class="p2">X{{ cartlist.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'CartListItem',
    props:{
      cartlist:{
        defult(){
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      isshowcheck(){
        this.cartlist.CheckButton = !this.cartlist.CheckButton
      },
    },
    components:{
      
    }
  }
</script>

<style>
.cartlistitem{
  width: 100%;
  height: 150px;
  border-bottom: 1px solid  #969393;
}
.cartlistitem img{
  width: 110px;
  height: 130px;
  margin: 10px 0 10px 5px;
  border-radius: 8px;
}
.cartlistitem p {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
}
.cartc p:last-of-type{
  font-size: 15px;
    padding-top: 5px;
    color: slategrey;
}
.cartc{
  display: inline-block;
  width: 55%;
  height: 130px;
  margin: 10px 0 10px 10px;
  position: absolute;
}
.lrbottom{
  margin-top: 50px;
}
.p1{
  float: left;
  color: #db3535;
}
.p2{
  float: right;
}
.imgcheck{
  display: inline-block;
}
.imgcheck img{
  width: 22px;
  
}

</style>
