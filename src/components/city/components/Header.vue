<template>
   <div class="herder">
      城市选择
        <div class="iconfont header-back" @click="ReturnHeader">&#xe63b;</div>
   </div>
</template>
<script>
export default {
  name: 'City',
  methods:{
    ReturnHeader(){
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/varibles.scss';
   .herder{
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
