<template>
  <div id="app">
    <Header />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "@/@core/components/Hearder.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/@core/scss/main.scss";
</style>
