<template>
  <div id="app">
    <div v-if="user && $route.meta.requiresAuth">
      <Header />
      <div class="app-home">
        <div class="app-home__content">
          <div class="app-home__col">
            <AppNavigation />
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
import AppNavigation from "@/components/AppNavigation/index.vue";
import Header from "./components/Header/index.vue";
const { user } = useAuthUser();
import { onMounted } from "vue";

onMounted(() => {
  console.log(
    "%c A simplicidade é o último grau de sofisticação. - Leonardo da Vinci ",
    "color:hsl(240, 100%, 90%);background-color:hsl(240, 100%, 50%);"
  );
});
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
      }
    }
  }
}
</style>
