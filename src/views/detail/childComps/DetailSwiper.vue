<template>
    <swiper v-if="Object.keys(topimage).length!==0">
        <swiper-item v-for="(item,index) in topimage" :key="index">
            <img :src="item" />
        </swiper-item>
    </swiper>
</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:'Deatil',
    props:{
        topimage:{
            type:Array,
            default(){
                return []
            }
        }
    },
    mounted() {
        
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>