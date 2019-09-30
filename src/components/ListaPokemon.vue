<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex
        xs12
        sm4
        lg2
        class="text-xs-center text-center"
        v-for="(pok, index) in pokemon"
        :key="'pok'+index"
      >
        <v-card
          class="nes-container is-rounded mx-auto"
          height="100%"
          @click="playPokemonCry(index + 1)"
        >
          <v-img :src="pok.image" :alt="`Imagem do pokemon ${pok.name}`" style="weight: 45px">
            <v-layout slot="placeholder" fill-height align-center justify-center>
              <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-card-title class="text-capitalize">{{pok.name}}</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      pokemon: [],
      dialog: false,
      url: 'https://pokeapi.co/api/v2/pokemon/'
    };
  },
  mounted() {
    return this.fetchPokemon();
  },
  methods: {
    fetchPokemon() {
      const promises = [];

      for (let i = 1; i <= 802; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(
          fetch(url).then(res => {
            return res.json();
          })
        );
      }

      Promise.all(promises).then(results => {
        this.pokemon = results.map(data => ({
          name: data.name,
          id: data.id,
          image: data.sprites["front_default"],
          type: data.types.map(type => type.type.name)
        }));
        return this.pokemon;
      }).catch((error) => {
        console.log(error)
      });
    },
    playPokemonCry(pokemonId) {
      const audio = new Audio(
        `https://pokemoncries.com/cries/${pokemonId}.mp3`
      );
      audio.play();
    }
  }
};
</script>

<style scoped>
.nes-container.is-rounded{
  padding: 0;
}
.v-image__image--cover {
  background-size: auto;
}
.v-card__title {
  font-size: .8rem;
  padding: 0;
  justify-content: center;
  word-break: normal;
}
@media (max-width: 425px) {
  
}
</style>
