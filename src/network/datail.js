import { request } from 'network/request'
export function getdatail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getreCommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods {
    constrector(itemInfo, columns, services) {
        this.title = itemInfo.title,
        this.desc = itemInfo.desc,
        this.newPrice = itemInfo.price,
        this.oldPrice = itemInfo.oldPrice,
        this.discount = itemInfo.discountDesc,
        this.discountBgColor = itemInfo.discountBgColor,
        this.columns = columns,
        this.services = services,
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop{
    constrectorshop(shopInfo){
        this.shopLogo = shopInfo.shopLogo,
        this.name = shopInfo.name,
        this.cFans = shopInfo.cFans,
        this.cSells = shopInfo.cSells,
        this.cGoods = shopInfo.cGoods,
        this.score = shopInfo.score
    }
}

export class GoodsParams{
    constrectorgoods(info,rule){
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.rule = rule.tables;
    }
}