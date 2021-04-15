<template>
  <div class="category">
    <nav-bar class="categorynavbar">
      <div class="center" slot="center">商品分类</div>
    </nav-bar>
    <div class="dabox">
      <left-navigation
        :leftnavdata="leftnavdata"
        @itemcolorclick="itemcolorclick"
      />
      <right-content :categoryData="categoryData" :currerindex="currerindex" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import LeftNavigation from "./chilComps/LeftNavigation";
import RightContent from "./chilComps/RightContent";


import { Getcategory, GetSubcategory,Getcategorydetail } from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    LeftNavigation,
    RightContent,
  },
  data() {
    return {
      leftnavdata: [],
      categoryData: {},
      currerindex:0
    };
  },
  created() {
    this._Getcategory()
  },
  methods: {
    _Getcategory() {
      Getcategory().then((res) => {
        this.leftnavdata = res.data.category.list;
        for (let i = 0; i < this.leftnavdata.length; i++) {
          this.categoryData[i] = {
            subcategories:{},
            categoryDetail:{
              pop: [],
              new: [],
              sell: [],
            },

          };
        }
        this.itemcolorclick(0)
      });
    },
    CategoryIconData(index) {
      GetSubcategory(this.leftnavdata[index].maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getcategorydetail('pop')
        this.getcategorydetail('sell')
        this.getcategorydetail('new')
      });
    },
    getcategorydetail(type){
      const miniWallkey = this.leftnavdata[this.currerindex].miniWallkey
      Getcategorydetail(miniWallkey, type).then(res=>{
        this.categoryData[this.currerindex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    itemcolorclick(index) {
      this.CategoryIconData(index);
      this.currerindex=index
    },
  },
};
</script>


<style>
.category {
  width: 100%;
  height: 100vh;
}
.categorynavbar {
  background-color: #f9a3ca;
}
.center {
  color: white;
}
.dabox {
  height: calc(100% - 46px - 49px);
}
</style>