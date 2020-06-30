<template>
   <ul class="list">

     <li class="item" v-for="item of letters" :key="item" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>

   </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities:Object
  },
  computed: {
    letters(){
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data(){
    return{

      touchStatus: false
    }
  },
  methods:{
    handleLetterClick(e){
      this.$emit('change',e.target.innerText)//$emit:向外触发事件,用city.vue来监听emit
    },
    handleTouchStart(){
      //手指触摸得时候触发
      this.touchStatus = true
    },
    handleTouchMove(){
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        console.log(startY)
      }
    },
    handleTouchEnd(){
     //手指结束false
     this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/varibles.scss';
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.68rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    background: #FFF;
  .item{
    line-height: .4rem;
    text-align: center;
    color: $bgColor;
  }
  }
</style>
