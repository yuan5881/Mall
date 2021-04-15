import {ADD_COUNTS,ADD_TO_CART} from './mutation-type.js'
export default {
    [ADD_COUNTS](state, payload){
        payload.count ++;
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1
        payload.CheckButton=true
        state.cartList.push(payload)
    },
    ghj(state,dtt){
        state.homescrolltab = dtt
    }
}