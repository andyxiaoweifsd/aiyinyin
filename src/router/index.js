import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HelloWorld from '../components/HelloWorld.vue'
import City from '../components/city/City.vue'
import Detail from '../components/detail/Detail.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/',name: 'Home',component: HelloWorld,},
  { path: '/City',name: 'City',component:City},
  { path: '/detail',name: 'Detail',component:Detail},
  {
    path:'/HelloWorld', component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
