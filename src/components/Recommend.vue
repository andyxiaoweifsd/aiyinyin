<template>
  <div>
    <div class="title">热销推荐</div>
    <ul v-for="(item, key) of RecommendList" :key="key">
      <li class="item border-bottom">

          <img :src="item.imgUrl" alt class="item-img" />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-dest">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="item-all"><p class="item-product">查看所有产品</p></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      RecommendList:[
      {imgUrl: require('../assets/imgs/timg2.png'),title: '小鬼',desc: '你在干嘛,你在干嘛你在干嘛你在干嘛'},
      {imgUrl: require('../assets/imgs/timg3.png'),title: '南归',desc: '今天出去玩吗'},
      {imgUrl: require('../assets/imgs/timg4.png'),title: '大鬼',desc: 'qqq'},
      // {imgUrl: require('../assets/imgs/timg5.png'),title: '老鬼',desc: 'ddd'},
      // {imgUrl: require('../assets/imgs/timg2.png'),title: '死鬼',desc: 'fffffff'},
      // {imgUrl: require('../assets/imgs/timg7.png'),title: '南归',desc: '今天出去玩吗'},
      // {imgUrl: require('../assets/imgs/timg3.png'),title: '南归',desc: '今天出去玩吗'}
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    border-bottom: #ccc;
    // background: pink;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
    }
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
    }
    .item-dest{
      line-height: .4rem;
      color: #ccc;
    }
    .item-button{
      width: 72px;
      height: 22px;
      line-height: .44rem;
      margin-top: 0.22rem;
      background: #ff9300;
      // padding: 0.1rem;
      border-radius: .06rem;
      color: #fff;
    }
  }
  .item-all{
    width: 100%px;
    height: 33px;
    .item-product{
      color: #00bad4;
      text-align: center;
      line-height: 37px;
    }
  }

</style>
