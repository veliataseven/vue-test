<template>
  <div>
    <v-app-bar color="indigo accent-2" dark>
      <v-btn
        dark
        text
        class="mr-3 hidden-sm-and-up"
        v-on:click.stop="drawer = !drawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title>Awesome Products</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text to="/"> <v-icon left>store</v-icon>Store </v-btn>
        <v-btn text to="cart">
          <v-icon left>shop</v-icon>Cart
          <span class="orange--text alert">
            {{ cartProducts.length > 0 ? `(${numberOfAddedProducts})` : '' }}
          </span>
        </v-btn>
        <v-btn text to="search"> <v-icon left>search</v-icon>Search </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      color="indigo accent-2"
      dark
      v-model="drawer"
      temporary
      absolute
    >
      <v-list>
        <v-list-item :to="'/'"> <v-icon left>store</v-icon>Store </v-list-item>
        <v-list-item :to="'/cart'">
          <v-icon left>shop</v-icon>Cart
        </v-list-item>
        <v-list-item :to="'/search'">
          <v-icon left>search</v-icon>Search
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(['cartProducts', 'numberOfAddedProducts']),
  },
};
</script>

<style scoped>
.alert {
  font-size: 1.1rem;
}
</style>
