<template>
  <div v-if="about" class="home">
    <h1 class="home__title">Editar página inicial</h1>
    <div class="flex gap-4">
      <div class="home__form__group">
        <label class="home__form__label" for="email">Primeiro nome</label>
        <input
          id="firstName"
          v-model="about.firstName"
          class="home__form__input"
          type="text"
          name="firstName"
          placeholder="Primeiro nome"
          required
        />
      </div>
      <div class="home__form__group">
        <label class="home__form__label" for="email">Sobrenome</label>
        <input
          id="lastName"
          v-model="about.lastName"
          class="home__form__input"
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          required
        />
      </div>
    </div>

    <div class="home__form__group">
      <label class="home__form__label" for="email">Sobrenome</label>
      <textarea
        id="description"
        v-model="about.description"
        class="home__form__textarea"
        name="description"
        placeholder="Descriçāo"
        required
        rows="4"
      />
    </div>

    <div class="home__form__action">
      <button class="home__form__button" @click="update">atualizar</button>
    </div>
  </div>
</template>

<script setup>
import { getAbout, updateAbout } from "../../../services/algolia";
import { ref } from "vue";

const about = ref(null);

const get = async () => {
  try {
    const { data, status } = await getAbout();
    if (data && status === 200) about.value = data.hits[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const update = async () => {
  try {
    const { status } = await updateAbout(about.value);
    console.log(status);
  } catch (error) {
    throw new Error(error.message);
  }
};

get();
</script>

<style lang="scss" scoped>
.home {
  &__title {
    @apply text-2xl mb-6 text-gray-600 font-bold font-sans;
  }

  &__form {
    @apply w-3/5;
    $this: &;

    &__group {
      @apply w-full;
    }
    &__label {
      @apply text-gray-800 font-semibold block my-3;
    }

    &__input,
    &__textarea {
      @apply w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none;
    }

    &__action {
      @apply flex w-full justify-end;
      #{$this}__button {
        @apply mt-6 mb-4 bg-green-700 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans;
      }
    }
  }
}
</style>
