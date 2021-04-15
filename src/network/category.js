import {request} from './request'

export function Getcategory(){
    return request({
        url:'/category'
    })
}

export function GetSubcategory(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey,
        }
    })
}

export function Getcategorydetail(miniWallkey, type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type,
        }
    })
}