<template>
  <div class="app-profile">
    <div class="app-profile__content">
      <form class="app-profile__form" @submit.prevent="updateProfile">
        <h1 class="app-profile__form__title">Meu perfil</h1>
        <div>
          <label class="app-profile__form__label" for="username">Nome</label>
          <input
            id="username"
            v-model="user.name"
            class="app-profile__form__input"
            type="text"
            name="username"
            placeholder="nome"
            disabled
          />
        </div>

        <div>
          <label class="app-profile__form__label" for="email">Email</label>
          <input
            id="email"
            v-model="user.email"
            class="app-profile__form__input"
            type="text"
            name="email"
            placeholder="email"
            required
            disabled
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useLoggedInUserStore } from "@/store/loggedInUser";

const { getUser: user } = useLoggedInUserStore();
</script>

<style lang="scss" scoped>
.app-profile {
  $this: &;

  &__content {
    @apply flex justify-center items-center py-6;
    #{$this}__form {
      @apply w-3/5;

      &__title {
        @apply text-center text-2xl mb-6 text-gray-600 font-bold font-sans;
      }

      &__label {
        @apply text-gray-800 font-semibold block my-3;
      }

      &__input {
        @apply w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none;

        &:disabled {
          @apply opacity-50 bg-gray-200 cursor-not-allowed;
        }
      }
    }
  }
}
</style>
