import {ADD_COUNTS,ADD_TO_CART} from './mutation-type.js'
export default {
    addCart(context,payload){
      return new Promise((resolve,reject) =>{
        let oldproduct = context.state.cartList.find(item => item.iid === payload.iid )
        if (oldproduct) {
            context.commit(ADD_COUNTS,oldproduct)
            resolve('当前商品数量加一')
        }
        else{
            // payload.count =1
            context.commit(ADD_TO_CART,payload)
            resolve('添加购物车成功')
        }
      })
    }
}
