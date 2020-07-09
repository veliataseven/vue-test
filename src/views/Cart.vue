<template>
  <v-row class="justify-center pl-4">
    <v-col v-for="(item, index) in cartProducts" :key="index">
      <AddedProduct :product="item" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import AddedProduct from '../components/AddedProduct.vue';
export default {
  name: 'Cart',
  components: {
    AddedProduct,
  },
  computed: {
    ...mapGetters(['cartProducts']),
  },
};
</script>
