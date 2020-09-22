<template lang="html">
  <div class="languages">
    <div class="title">
      Choisir une langue
    </div>
    <div
      class="language"
      v-for="lang in $store.state.languages"
      v-bind:key="lang"
    >
      <router-link :to="'lang/' + lang">
        {{ lang }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchLanguages')
  },
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
