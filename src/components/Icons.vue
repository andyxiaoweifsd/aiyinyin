<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,key) of iconsList" :key="key">
        <div class="icon" v-for="(obj,key) of item.data" :key="key">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="obj.imgUrl" alt />
            <p>热门景点</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions:{
        autoplay: false
      },
      iconsList: [
        {
          data: [
            { imgUrl: require("../assets/imgs/1.png"),desc:'ppp' },
            { imgUrl: require("../assets/imgs/2.png") },
            { imgUrl: require("../assets/imgs/3.png") },
            { imgUrl: require("../assets/imgs/4.png") },
            { imgUrl: require("../assets/imgs/5.png") },
            { imgUrl: require("../assets/imgs/6.png") },
            { imgUrl: require("../assets/imgs/7.png") },
            { imgUrl: require("../assets/imgs/8.png") },

          ]
        },
        {
          data: [
            // { imgUrl: require("../assets/imgs/1.png"),desc:'ppp' },
            // { imgUrl: require("../assets/imgs/2.png") },
            // { imgUrl: require("../assets/imgs/3.png") },
            // { imgUrl: require("../assets/imgs/4.png") },
            // { imgUrl: require("../assets/imgs/5.png") },
            // { imgUrl: require("../assets/imgs/6.png") },
            // { imgUrl: require("../assets/imgs/7.png") },
            // { imgUrl: require("../assets/imgs/8.png") },
            { imgUrl: require("../assets/imgs/1.png")}
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.icons {
  /deep/
   .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }

  //  flex: 1;
  //  justify-content: center;
  //  align-content: center;
  //  background: pink;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    //  background: red;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    .icon-imgcontent {
      margin-top: 5px;
    }
  }
  p {
    text-align: center;
    color: #333;
  }
  .icon-imgcontent {
    height: 65%;
    margin: 0 auto;
    display: block;
  }
}
</style>
