<template>
  <div class="Store">
    <v-row justify="center" class="pl-3">
      <v-col v-for="(item, index) in allProducts" :key="index">
        <Product :product="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '../components/Product.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Store',
  components: {
    Product,
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  created() {
    this.fetchProducts();
  },
};
</script>
