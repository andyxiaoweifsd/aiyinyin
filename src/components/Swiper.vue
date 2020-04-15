<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, key) of swiperList" :key="key">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay:{
        //   delay:1000
        // },
      loop:true
      },
      swiperList: [
        { imgUrl: require('../assets/imgs/lunbotu.png') },
        { imgUrl: require('../assets/imgs/lunbotu2.png') },
        { imgUrl: require('../assets/imgs/lunbotu3.png') },
        { imgUrl: require('../assets/imgs/lunbotu4.png') },
        { imgUrl: require('../assets/imgs/lunbotu5.png') }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(2, 1000, false);
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>
<style lang="scss" scoped>
// .swiper {
//   /deep/
//   .swiper-pagination-bullet-active  {
//     background: red;
//   }
// }
.swiper {
  // overflow: hidden;
  // width: 100%;
  // height: 140px !important;

  background: #e8e8e8;
  .swiper-img {
    height: 140px;
    width: 100%;
  }
}
</style>
