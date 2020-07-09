import axios from 'axios';
const { BASE_URL } = require('../../util/BASE_URL.json');

const state = {
  products: [],
  addedProducts: [],
};

const getters = {
  allProducts: (state) => state.products,
  cartProducts: (state) => state.addedProducts,
  numberOfAddedProducts: (state) =>
    state.addedProducts.reduce((total, item) => {
      return total + item.number;
    }, 0),
};

const actions = {
  async fetchProducts({ commit }) {
    console.log('BASE_URL', BASE_URL);
    const response = await axios.get(`${BASE_URL}/products.json`);
    commit('SET_PRODUCTS', response.data);
  },
  addProductToCart({ commit }, product) {
    commit('ADD_NEW_PRODUCT', product);
  },
  deleteFromCart({ commit }, title) {
    commit('REMOVE_PRODUCT', title);
  },
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
  },
  ADD_NEW_PRODUCT: (state, product) => {
    if (state.addedProducts.length === 0) {
      state.addedProducts = [...state.addedProducts, { product, number: 1 }];
    } else {
      const result = state.addedProducts.filter((item) => {
        if (item.product.title === product.title) {
          item.number++;
          return item;
        }
      });

      if (result.length === 0) {
        state.addedProducts = [...state.addedProducts, { product, number: 1 }];
      }
    }
  },
  REMOVE_PRODUCT: (state, title) => {
    const result = state.addedProducts.filter((item) => {
      if (item.product.title === title && item.number > 1) {
        item.number--;
        return item;
      }
    });

    if (result.length === 0) {
      state.addedProducts = state.addedProducts.filter((item) => {
        if (item.product.title !== title) {
          return item;
        }
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
