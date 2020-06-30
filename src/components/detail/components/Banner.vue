<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-bgimg" src="../../../assets/imgs/xqt2.png" />
      <div class="banner-info">
        <div class="banner-title">南沙百万葵园</div>
        <div class="banner-number">
          <img class="banner-img" src="../../../assets/imgs/xt b.png" alt />82
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "../../../common/galary/Gallary";
export default {
  name: "banner",
  data () {
    return {
      showGallary : false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_r_800x800_40ffd799.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/62/560c657f4c5d0cca833bb69bfd1ccd9e.water.jpg_r_800x800_11d15a01.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-bgimg {
    width: 100%;
  }
}
.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  .banner-title {
    flex: 1;
    font-size: 0.32rem;
    padding: 0.2rem;
  }
}
.banner-number {
  padding: 0.2rem;
  line-height: 0.1rem;
  height: 0.1rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.24rem;
  .banner-img {
    width: 17px;
    height: 17px;
  }
}
</style>
