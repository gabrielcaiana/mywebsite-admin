<template>
  <div class="app-home">
    <div class="app-home__header">
      <span>Gabriel Caiana - Admin</span>
      <router-link to="/logout">logout</router-link>
    </div>
    <div class="app-home__content">
      <div class="app-home__col">
        <div class="app-home__card">
          <router-link to="/profile">Meu perfil</router-link>
        </div>
        <div class="app-home__card"></div>
      </div>
      <div class="app-home__col col-span-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.app-home {
  $this: &;
  @apply bg-gray-100;

  &__header {
    @apply flex justify-between bg-white p-4;
  }

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
