<template>
  <div class="app">
    <header v-if="user" class="app__header">
      <router-link to="/home">Gabriel Caiana - Admin</router-link>
      <router-link to="/logout">logout</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import useAuthUser from "./composables/UseAuthUser";
const { user } = useAuthUser();
</script>

<style lang="scss" scoped>
.app {
  &__header {
    @apply flex justify-between bg-white p-4;
  }
}
</style>
