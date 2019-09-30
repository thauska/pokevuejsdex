<template>
  <v-footer row app class="pa-1">
    <v-layout wrap class="nes-container is-rounded pa-0 ma-0">
      <v-flex>
        <small>
          &copy; {{ new Date().getFullYear() }} —
          <strong>Thayana Mamoré</strong>
        </small>
      </v-flex>
      <v-flex class="text-right">
        <a href="https://github.com/thauska" target="_blank" class="pr-2">
          <i class="nes-icon github is-small"></i>
        </a>
        <a href="https://www.linkedin.com/in/thayanacmamore/" target="_blank">
          <i class="nes-icon linkedin is-small"></i>
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>

div .flex {
  margin: 0 10px 0 10px;
}

@media (max-width: 375px) {
  .v-footer {
    font-size: 0.7rem;
  }
}
</style>
