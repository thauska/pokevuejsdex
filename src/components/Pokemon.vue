<template>
  <v-container>
    <ListaPokemon :imageUrl="imageUrl" :apiUrl="apiUrl" />
  </v-container>
</template>

<script>
import ListaPokemon from "./ListaPokemon";

export default {
  data() {
    return {
      showDetail: false,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/"
    };
  },
  components: {
    ListaPokemon
  }
};
</script>

<style>
</style>
