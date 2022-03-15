<template>
  <div class="app-navigation">
    <div class="app-navigation__card">
      <div class="app-navigation__card__list">
        <router-link to="/home">Bem vindo</router-link>
        <router-link to="/profile">Meu perfil</router-link>
      </div>

      <hr class="my-5" />

      <span class="app-navigation__card__subtitle">Editar páginas do site</span>
      <div class="app-navigation__card__list">
        <router-link to="/home-site">Página inicial</router-link>
        <router-link to="/jobs-site">Experiência</router-link>
        <router-link to="/projects-site">Projetos</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
};
</script>

<style lang="scss" scoped>
.app-navigation {
  .app-link-active {
    @apply text-blue-500;
  }

  &__card {
    @apply p-4 bg-white border border-gray-300 rounded-md mb-3;

    &__subtitle {
      @apply text-lg text-gray-600 font-bold;
    }

    &__list {
      @apply flex flex-col;
      & > * {
        @apply my-2 cursor-pointer;
      }
    }
  }
}
</style>
