<template>
  <div class="Toast" v-if="isshowtoast"> 
    {{ message }}
  </div>
</template>

<script>
  export default {
    name:"Toast",
    data() {
      return {
        isshowtoast:false,
        message:''
      }
    },
    methods: {
      isShow(message='默认提示',duration=2000){
        this.message = message,
        this.isshowtoast = true
        setTimeout(() =>{
          this.message = '',
          this.isshowtoast = false
        },duration)
      }
    },
  }
</script>

<style>
  .Toast{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    background-color: rgba(0,0,0,.6);
    color: white;
    padding: 13px 10px;
    transform: translate(-50%,-50%);
  }
</style>
