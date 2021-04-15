import BackTop from "components/content/backtop/BackTop";
import {BackPosition} from 'common/utils'
export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return {
      isshowgotop: false,
    }
  },
  methods:{
    backclick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenshowBackTop(positiony){
      this.isshowgotop = positiony > BackPosition;
    }
  }
}
