<template>
  <div v-if="jobs" class="jobs">
    <div class="flex items-center justify-between">
      <h1 class="jobs__title">Editar experiências</h1>

      <button class="jobs__button">atualizar</button>
    </div>
    <div class="jobs__list">
      <div v-for="job in jobs" :key="job.objectID" class="jobs__list__group">
        image: {{ job.image }} <br />
        description: {{ job.description }}<br />
        name: {{ job.name }} <br />
        ocupation: {{ job.ocupation }}<br />
        period: {{ job.period }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { getJobs } from "@/services/algolia";
import { ref } from "vue";

const jobs = ref(null);

const get = async () => {
  try {
    const { data, status } = await getJobs();
    if (data && status === 200) jobs.value = data.hits;
    console.log(jobs.value);
  } catch (error) {
    throw new Error(error.message);
  }
};
get();
</script>

<style lang="scss" scoped>
.jobs {
  &__title {
    @apply text-2xl  text-gray-600 font-bold font-sans;
  }

  &__list {
    @apply overflow-auto mt-4;
    height: 500px;
    &__group {
      @apply w-full my-5;
    }
  }
  &__button {
    @apply bg-green-700 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans;
  }
}
</style>
