<template>
    <v-text-field
      prepend-icon="search"
      v-model="searchPokemon"
      solo
      append-icon="cancel"
      hide-details
      single-line
    ></v-text-field>
</template>

<script>
  export default {
    props: [
      'url'
    ],
    data: () => {
      return {
        searchvalue: '',
      }
    },
    methods: {
      setPokemonUrl(url) {
        if(this.searchvalue !== '')
          this.$emit('setPokemonUrl', this.url + this.searchPokemon);
      }
    }
  }
</script>

<style>
</style>
