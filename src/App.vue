<template>
  <v-app>
    <Header />
    <v-content>
      <v-flex xs12>
        <v-img src="Pokemon_logo.gif" contain height="200"></v-img>
      </v-flex>
      <ListaPokemon />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaPokemon from "./components/ListaPokemon";

export default {
  name: "App",
  components: {
    Header,
    ListaPokemon,
    Footer
  }
};
</script>

<style>
.v-application {
  font-family: "Press Start 2P", cursive !important;
}
</style>
