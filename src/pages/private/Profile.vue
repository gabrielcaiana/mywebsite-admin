<template>
  <div v-if="user" class="app-profile">
    <div class="app-profile__content">
      <div class="app-profile__col">
        <div class="app-profile__card"></div>
        <div class="app-profile__card"></div>
      </div>
      <router-link to="/logout">logout</router-link>
      <div class="app-profile__col col-span-3"></div>
    </div>
  </div>
</template>

<script setup>
import useAuthUser from "../../composables/UseAuthUser";
const { user } = useAuthUser();
</script>

<style lang="scss" scoped>
.app-profile {
  $this: &;
  @apply bg-gray-100;

  &__content {
    @apply grid grid-cols-4 gap-3 h-screen;

    #{$this}__col {
      @apply p-6;

      #{$this}__card {
        @apply p-4 bg-white border border-gray-300 rounded-md mb-3;
      }
    }
  }
}
</style>
