<template>
  <v-app-bar app>
    <v-toolbar-title xs12>
      Poke<small><span class="nes-text is-success">{{vuejs}}</span></small>dex
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      vuejs: "{{Vuejs}}"
    };
  }
};
</script>

<style scoped>
@media (max-width: 425px) {
  .v-toolbar__title {
    font-size: 1rem;
  }
}
</style>
