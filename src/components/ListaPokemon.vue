<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex
        xs12
        sm4
        lg2
        class="text-xs-center text-center"
        v-for="(pok, index) in pokemons"
        :key="'pok'+index"
      >
        <v-card
          class="nes-container is-rounded mx-auto"
          height="100%"
          @click="playPokemonCry(index + 1)"
        >
          <v-img :src="imageUrl + pok.id + '.png'" :alt="`Imagem do pokemon ${pok.name}`">
            <v-layout slot="placeholder" fill-height align-center justify-center>
              <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-card-title class="text-capitalize">{{pok.name}}</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      slot="placeholder"
      ref="infinitescrolltrigger"
      fill-height
      align-center
      justify-center
    >
      <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      errors: [],
      currentUrl: "",
      nextUrl: ""
    };
  },
  methods: {
    fetchPokemon() {
      let req = new Request(this.currentUrl);
      fetch(req)
        .then(resp => {
          if (resp.status === 200) return resp.json();
        })
        .then(data => {
          this.nextUrl = data.next;
          data.results.forEach(pokemon => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(part => {
                return !!part;
              })
              .pop()
            this.pokemons.push(pokemon)
          })
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    scrollTrigger() {
      const observer = new IntersectionObserver(entries => {
        entries.map(entry => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        });
      });
      observer.observe(this.$refs.infinitescrolltrigger);
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.fetchPokemon();
    },
    playPokemonCry(pokemonId) {
      const audio = new Audio(
        `https://pokemoncries.com/cries/${pokemonId}.mp3`
      );
      audio.play();
    }
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchPokemon();
  },
  mounted() {
    this.scrollTrigger();
  }
};
</script>

<style scoped>
.nes-container.is-rounded {
  padding: 0;
}
.v-card__title {
  font-size: 1.1rem;
  padding: 0;
  justify-content: center;
  word-break: normal;
}
</style>
