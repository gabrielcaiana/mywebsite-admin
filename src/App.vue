<template>
  <div class="app">
    <div v-if="user && $route.meta.requiresAuth">
      <Header />
      <div class="app-home">
        <div class="app-home__content">
          <div class="app-home__col">
            <div class="app-home__card">
              <ul class="app-home__card__list">
                <router-link to="/home">Bem vindo</router-link>
              </ul>
            </div>
            <div class="app-home__card">
              <ul class="app-home__card__list">
                <router-link to="/profile">Meu perfil</router-link>
              </ul>
            </div>
            <div class="app-home__card">
              <span class="app-home__card__subtitle"
                >Editar páginas do site</span
              >
              <ul class="app-home__card__list">
                <router-link to="/home-site">Página inicial</router-link>
                <router-link to="/jobs-site">Experiência</router-link>
                <router-link to="/projects-site">Projetos</router-link>
              </ul>
            </div>
          </div>
          <div class="app-home__col col-span-3">
            <div class="app-home__card">
              <main>
                <router-view />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import useAuthUser from "./composables/UseAuthUser";
import Header from "./components/Header/index.vue";
const { user } = useAuthUser();
</script>

<style lang="scss" scoped>
.app-home {
  $this: &;
  @apply bg-gray-100;

  &__content {
    @apply grid grid-cols-4 h-screen;

    #{$this}__col {
      @apply p-6;

      #{$this}__card {
        @apply p-4 bg-white border border-gray-300 rounded-md mb-3;

        &__subtitle {
          @apply text-lg text-blue-500;
        }

        &__list {
          @apply flex flex-col;
          & > * {
            @apply my-2 cursor-pointer;
          }
        }
      }
    }
  }
}
</style>
