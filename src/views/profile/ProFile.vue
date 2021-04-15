<template>
  <div class="profile">
    <nav-bar class="profiletopnav">
      <div class="center" slot="center">我的</div>
    </nav-bar>
    <div class="prodabox">
      <div class="login">
        <img src="~assets/img/默认头像.svg" alt="默认头像" />
        <div class="logincontent">
          <div>登录/注册</div>
          <div class="lastdiv"><img src="~assets/img/手机.svg" alt="" align="center" />暂无绑定手机号</div>
        </div>
        <div class="imgright"><img src="~assets/img/右.svg" alt=""></div>
      </div>
      <div class="wallet">
        <div class="walletleft">
          <div class="balance">0.00<span>元</span></div>
          <div class="mybalance">我的余额</div>
        </div>
        <div class="walletcenter">
          <div class="balance">0<span>个</span></div>
          <div class="mybalance">我的优惠</div>
        </div>
        <div class="walletright">
          <div class="balance">0<span>分</span></div>
          <div class="mybalance">我的积分</div>
        </div>
      </div>
      <div class="contercenter">
        <div class="middle"><img src="~assets/img/星.svg" />
          <div>我的消息</div>
        </div>
        <div class="middle"><img src="~assets/img/星.svg" />
          <div>积分商城</div>
        </div>
        <div class="middle"><img src="~assets/img/星.svg" />
          <div>会员卡</div>
        </div>
      </div>
      <div class="conterbottom">
        <div class="middle"><img src="~assets/img/星.svg" />
          <div>我的购物车</div>
        </div>
        <div class="middle"><img src="~assets/img/星.svg" />
          <div>下载购物APP</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "ProFile",
    components: {
      NavBar,
    }
  };
</script>


<style>
  .profile {
    height: 100vh;
    background-color: #87CEEB;
  }

  .profiletopnav {
    background-color: #f9a3ca;
  }

  .center {
    color: white;
  }

  .prodabox {
    height: calc(100% - 46px - 49px);
  }

  .login {
    display: flex;
    height: 65px;
    background-color: #f9a3ca;
  }

  .login img {
    margin: 7px 7px;
  }

  .logincontent {
    flex: 1;
    margin: 14px 8px;
    font-size: 15px;
    color: white;
  }

  .lastdiv {
    font-size: 10px;
    padding-top: 4px;
  }

  .lastdiv img {
    width: 15px;
    padding: 0;
    margin: 0;
  }

  .wallet {
    display: flex;
    height: 60px;
    text-align: center;
    background-color: white;
  }

  .walletleft,
  .walletcenter,
  .walletright {
    flex: 1;
    margin: 10px 0;
  }

  .walletleft div,
  .walletcenter div,
  .walletright div {
    padding-top: 4px;
  }

  .balance {
    color: red;
    font-weight: 600;
  }

  .balance span {
    font-weight: 200;
    font-size: 10px;
    color: #666666;
  }

  .mybalance {
    font-size: 12px;
  }

  .contercenter, .conterbottom{
    background-color: white;
    margin: 15px 0;
  }

  .middle {
    color: black;
  }

  .middle img {
    width: 5%;
    vertical-align: middle;
    margin: 0 2%;
  }

  .middle div {
    font-size: 14px;
    border-bottom: 1px #f7f7f7 solid;
    display: inline-block;
    padding: 10px 0;
    width: 91%;
  }

  .middle:last-of-type div {
    border-bottom: none;
  }
  .conterbottom{
    height: calc(100% - 60px - 65px - 110px - 30px);
  }
</style>
