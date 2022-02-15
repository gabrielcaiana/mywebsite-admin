<template>
  <div class="app-home">
    <div class="app-home__content">
      <div class="app-home__col">
        <div class="app-home__card">
          <ul class="app-home__card__list">
            <li @click="setCurrent(Welcome)">Bem vindo</li>
          </ul>
        </div>
        <div class="app-home__card">
          <ul class="app-home__card__list">
            <li @click="setCurrent(Profile)">Meu perfil</li>
          </ul>
        </div>
        <div class="app-home__card">
          <span class="app-home__card__subtitle">Editar páginas do site</span>
          <ul class="app-home__card__list">
            <li @click="setCurrent(Home)">Página inicial</li>
            <li @click="setCurrent(Jobs)">Experiência</li>
            <li @click="setCurrent(Projects)">Projetos</li>
          </ul>
        </div>
      </div>
      <div class="app-home__col col-span-3">
        <div class="app-home__card">
          <component :is="current" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Welcome from "../../components/WelcomePage/index.vue";
import Home from "../../components/siteEdit/Home/index.vue";
import Jobs from "../../components/siteEdit/Jobs/index.vue";
import Projects from "../../components/siteEdit/Projects/index.vue";
import Profile from "./Profile.vue";

import { shallowRef } from "vue";

const current = shallowRef(Welcome);

const setCurrent = (component) => (current.value = component);
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
          & > * {
            @apply my-2 cursor-pointer;
          }
        }
      }
    }
  }
}
</style>
