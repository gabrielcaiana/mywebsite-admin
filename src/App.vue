<template>
  <div class="app">
    <Header v-if="user" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import useAuthUser from "./composables/UseAuthUser";
import Header from "./components/Header/index.vue";
const { user } = useAuthUser();
</script>

<style lang="scss" scoped></style>
