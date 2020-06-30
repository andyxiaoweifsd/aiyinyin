<template>
  <div>
     <div class="header-abs" @click="HeaderClick" v-show="showAbs">
       <div class="iconfont .header-abs-back">&#xe63b;</div>
     </div>
     <div class="header-fixed">景点详情
        <div class="iconfont header-back" @click="ReturnHeader">&#xe63b;</div>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    showAbs
  },
  methods: {
    HeaderClick () {
      this.$router.push({path:'/'})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/varibles.scss';
   .header-abs{
     position: absolute;
     left: .2rem;
     top: .2rem;
     width: .6rem;
     height: .6rem;
     line-height: .6rem;
     text-align: center;
     border-radius: .4rem;
     background: rgba(0,0,0,.5);
     .header-abs-back{
       color: #fff;
       font-size: .4rem;
     }
   }
      .header-fixed{
     position: relative;
     height: .86rem;
     line-height: .86rem;
     text-align: center;
     color: #fff;
     background: $bgColor;
     font-size: .32rem;
     .header-back{
       position: absolute;
       top: 0;
       left: 0;
       width: .64rem;
       text-align: center;
       font-size: .4rem;
     }
   }
</style>
