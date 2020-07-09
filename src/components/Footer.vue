<template>
  <v-footer dark padless>
    <v-card class="text-center indigo accent-2">
      <v-card-text class="white--text py-1">
        <v-btn size="24px" icon class="white--text mx-4">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn size="24px" icon class="white--text mx-4">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn size="24px" icon class="white--text mx-4">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn size="24px" icon class="white--text mx-4">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0 pb-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        excepturi, illo optio maiores modi dolor sequi architecto porro
        doloribus fugit! Quisquam eius ut, dolorum obcaecati impedit dignissimos
        illo itaque voluptatum.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text py-1">
        &copy; {{ new Date().getFullYear() }} -
        <strong>Nice Ducks</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style></style>
