<template>
  <div>
    <v-card width="500" height="240" class="mb-4 overflow-hidden">
      <v-row justify="center">
        <v-col cols="5" class="mr-2 py-4 px-8">
          <v-carousel height="220" hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in product.product.images"
              :key="i"
              :src="'http://104.248.95.12:8001/' + item"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="6">
          <v-card-title> {{ product.product.title }}</v-card-title>
          <v-card-subtitle class="blue--text">
            price:
            <strong class="red--text">{{ product.product.price }}</strong>
          </v-card-subtitle>
          <v-card-subtitle class="blue--text pt-0">
            category:
            <strong class="red--text">{{ product.product.category }}</strong>
          </v-card-subtitle>
          <v-card-subtitle class="red--text pt-0 pb-4">
            <strong class="blue--text pb-0">Number:</strong>
            {{ product.number }}
          </v-card-subtitle>
          <v-btn
            @click="removeFromCart(product.product.title)"
            small
            outlined
            color="error"
          >
            <v-icon left>delete</v-icon>
            Remove Product</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddedProduct',
  props: ['product'],
  methods: {
    ...mapActions(['deleteFromCart']),
    removeFromCart(title) {
      this.deleteFromCart(title);
    },
  },
};
</script>

<style>
.card-title {
  font-size: 1rem;
}
</style>
