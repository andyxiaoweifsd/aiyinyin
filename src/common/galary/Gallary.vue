<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img" :src="item" alt />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleGallaryClick () {
      //当点击图片时，触发事件
      this.$emit('close')
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      swiperOptions:{
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          paginationType: 'fraction',
          clickable: true
        },
        observeParents: true,
        observer: true
      }
    }
  }
};
</script>
<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    // overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
}
.gallary-img{
  width: 100%;
}
.swiper-pagination{
  color: #fff;
  bottom: -1rem;
}
  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: red;/* 两种都可以 */
  }
</style>
