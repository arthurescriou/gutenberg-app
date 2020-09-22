<template lang="html">
  <div class="books">
    <div class="title">
      {{ $route.params.lang }}
    </div>
    <div
      class="book"
      v-for="book in this.$store.state.books"
      v-bind:key="book.title"
    >
      {{ book.Title }}
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchBooks', this.$route.params.lang)
  },
  data() {
    return {
      lang: this.$route.params.lang,
    }
  },
}
</script>

<style lang="css" scoped></style>
