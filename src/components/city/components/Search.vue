<template>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    <div class="search-content" v-if="showFlag">
      <ul>
        <li v-for="item of list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  props:{
    cities:Object
  },
  data () {
    return{
      keyword: '',
      list: [],
      timer: null,
      showFlag: false
    }
  },
  watch: {
    keyword(val){
      //节流函数
      if (!val.length) {
        this.showFlag = false
        this.list = []
        clearTimeout(this.timer)
      } else {
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout( ()=> {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value)=> {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                result.push(value)
              }
            })
          }
          if (result.length) {
            this.showFlag = true
            this.list = result
          } else {
            this.showFlag = false
          }
        },1000)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~styles/varibles.scss";
.search {

  height: 0.72rem;
  padding: 0.1rem;
  padding-bottom: 0;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content{
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000040;
  ul {
    flex: 1;
    li {
      height: 0.76rem;
      line-height: 0.76rem;
      border-bottom: 1px solid red;
      background: #fff;
      padding-left: .2rem;
    }
  }
}
</style>
