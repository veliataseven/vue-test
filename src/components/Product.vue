<template>
  <v-card
    width="300"
    heigth="400"
    class="overflow-hidden mr-2 ml-2 mb-2 justify-center"
  >
    <v-row class="justify-center">
      <v-col class="px-1 py-1">
        <v-carousel height="220" hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in product.images"
            :key="i"
            :src="'http://104.248.95.12:8001/' + item"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <!-- <v-img :src="'http://104.248.95.12:8001/' + product.images[0]"></v-img> -->
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col justify="center">
        <v-card-title> {{ product.title }}</v-card-title>
        <v-card-subtitle class="blue--text pb-0">
          price: <strong class="red--text">{{ product.price }}</strong>
        </v-card-subtitle>
        <v-card-subtitle class="blue--text pt-0">
          category: <strong class="red--text">{{ product.category }}</strong>
        </v-card-subtitle>
        <v-btn
          @click="addToCart(product)"
          small
          outlined
          class="ml-4 "
          color="indigo accent-2"
        >
          <v-icon left>fa-plus</v-icon> Add to Cart</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['product'],
  methods: {
    ...mapActions(['addProductToCart']),
    addToCart(item) {
      this.addProductToCart(item);
    },
  },
};
</script>

<style></style>
