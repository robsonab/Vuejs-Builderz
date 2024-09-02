<template>
  <header>
    <the-header></the-header>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer>
    <the-footer></the-footer>
  </footer>
</template>
<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

</script>
<style scoped>
main {
  min-height: 20em;
}
</style>