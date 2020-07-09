import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../views/Store.vue';
import Cart from '../views/Cart.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store,
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
