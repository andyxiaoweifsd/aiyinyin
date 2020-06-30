<template>
   <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <div style="flex: 1">
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList:CityList,
    CityAlphabet:CityAlphabet
  },
  data(){
    return{
      //把data里面的数据传递给跟组件list.vue
      //对象，存放abcd所有城市的名字
      cities:{},
      //数组。存放热门城市
      hotCities:[],
      //父组件给子组件传递,通过属性的方法来传递
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('city.json')
         .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
       //handleGetCityInfoSucc方法接受模拟数据的结果
       //当Ajax获取好的数据
       res = res.data
       if(res.ret && res.data){
         const data = res.data
         this.cities = data.cities
         this.hotCities = data.hotCities
       }
    },
    //兄弟组件之间传递的数据letter,letter转发给list.vue
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  mounted(){
     this.getCityInfo()
  }
}
</script>
<style lang="scss" scoped>

</style>
