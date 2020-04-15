import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'styles/boeder.css';
import 'styles/reset.css';
import 'styles/iconfont.css';
import 'swiper/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
