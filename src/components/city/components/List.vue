<template>
  <div class="list" ref="wrapper"><!-- ref:获取wrapper元素或者选择器-->
    <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">广州</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper"  v-for="item of hotCities" :key="item.id">
          <div class="button">{{item.name}}</div>
        </div>

      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>

      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">B</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>

      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props:{
    //通过props来接受hotCities的数据
    hotCities:Array,
    cities:Object,
    //父组件city.vue传递一个letter，子组件就得接受一个letter
    letter:String
  },
  mounted(){ // 生命周期函数，在页面dom加载完成之后执行
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    //监听letter得变化
    letter(){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        //letter默认值为空，当letter不为空时调用scroll方法
        this.scroll.scrollToElement(element)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "styles/varibles.scss";
.border-topbottom {
  &:before {
    border-color: #ccc;
    &:after {
      border-color: #ccc;
    }
  }
}
.list{
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.title {
  height: 0.54rem;
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.button-list {
  overflow: hidden;
    padding: 0.1rem .6rem .1rem .1rem;
.button-wrapper {
      float: left;
      width: 33.33%;
 .button{
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .item-list{
    .item{
      line-height: .76rem;
      // color:#666;
      padding-left: .2rem;
    }
  }
</style>
