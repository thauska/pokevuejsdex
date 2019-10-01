<template>
  <v-container grid-list-lg>
    <v-layout justify-center align-center>
      <v-flex lg8 sm8 xs12>
        <v-text-field
          type="text"
          outline
          v-model="searchPokemon"
          append-icon="search"
          placeholder="Busque pelo nome do Pokémon"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex
        xs12
        sm4
        lg2
        class="text-xs-center text-center"
        v-for="(pok, index) in filterPokemon"
        :key="'pok'+index"
      >
        <v-card class="nes-container is-rounded mx-auto pa-0">
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
  data() {
    return {
      pokemons: [],
      errors: [],
      currentUrl: "",
      nextUrl: "",
      searchPokemon: "",
      pokemonUrl: ""
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
          data.results.map(pokemon => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(part => {
                return !!part;
              })
              .pop();
            this.pokemons.push(pokemon);
          });
        })
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
    setPokemonUrl(url) {
      this.pokemonUrl = url;
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
  },
  mounted() {
    this.scrollTrigger();
    this.fetchPokemon();
  },
  computed: {
    filterPokemon() {
      let p = this.pokemons
      return p.filter(poks => {
        return poks.name.includes(this.searchPokemon);
      });
    }
  }
};
</script>

<style scoped>
.v-card__title {
  font-size: 1.1rem;
  padding: 0;
  justify-content: center;
  word-break: normal;
}

.v-text-field--placeholder {
  font-size: small;
}

@media (max-width: 425px) {
  .v-text-field--placeholder {
    font-size: xx-small;
  }
}
</style>
