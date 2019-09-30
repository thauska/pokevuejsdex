<template>
  <v-app>
    <Header />
    <v-content>
      <v-flex xs12>
        <v-img src="Pokemon_logo.gif" contain height="200"></v-img>
      </v-flex>
      <Pokemon />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pokemon from "./components/Pokemon";

export default {
  name: "App",
  components: {
    Header,
    Pokemon,
    Footer
  }
};
</script>

<style>
.v-application {
  font-family: "Press Start 2P", cursive !important;
}
</style>
