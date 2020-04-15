<template>
  <div style="flex: 1">
    <headera :city="city" />
    <hello />
    <Swiper />
    <Icons />
    <Recommend />
    <Weekend />
    <Tabbar />
  </div>
</template>

<script>
import Headera from './Header'
import Hello from './Hello'
import Swiper from './Swiper'
import Icons from './Icons'
import Recommend from './Recommend'
import Weekend from './Weekend'
import Tabbar from './Tabbar'
import axios from 'axios'
export default {
  data() {
    return {
      city:'城市'
    }
  },
  components: {
    Headera: Headera,
    Hello: Hello,
    Swiper: Swiper,
    Icons: Icons,
    Recommend:Recommend,
    Weekend:Weekend,
    Tabbar:Tabbar
  },
  methods:{
    getInfo(){
      axios.get('mock.json')
        .then(req => {
          console.log('req', req)
        })
    },
    getInfoSucc(res){
      console.log(res)
    }
  },
  mounted(){
    this.getInfo()
  }
};
</script>

<style scoped lang="scss">

</style>
