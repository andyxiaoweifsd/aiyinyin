<template>
   <div>
      <mt-tabbar fixed  v-model="selected">
        <mt-tab-item id="外卖">
          <img slot="icon" src="../assets/imgs/wode (1).png" >
           
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../assets/imgs/wode (2).png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../assets/imgs/wode (3).png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../assets/imgs/wode (1).png">
          我的
        </mt-tab-item>
      </mt-tabbar>
   </div>
</template>
<script>
import { Tabbar, TabItem, Toast } from 'mint-ui';
export default {
  data(){
    return{
      selected: 0
    }
  },
  methods: {
    abb() {
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      });
    }
  },
  components: {
    MtTabbar: Tabbar,
    MtTabItem: TabItem
  }
}
</script>
<style lang="scss" scoped>

</style>
