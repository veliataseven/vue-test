<template>
  <v-container class="justify-center">
    <v-form @submit.prevent="handleSubmit">
      <v-container>
        <v-row class="justify-center ">
          <v-col cols="6">
            <v-text-field
              v-model="text"
              label="Search product by name"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="3" class="pt-4">
            <v-btn type="submit" large color="info" outlined> Search</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-row justify="center">
      <v-col v-for="(item, index) in filteredProducts" :key="index">
        <Product :product="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from '../components/Product.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Search',
  data() {
    return {
      text: '',
      filteredProducts: [],
    };
  },
  methods: {
    handleSubmit() {
      this.filteredProducts = this.allProducts.filter((item) =>
        item.title.toLowerCase().match(this.text.toLowerCase()),
      );
    },
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
  components: {
    Product,
  },
};
</script>
