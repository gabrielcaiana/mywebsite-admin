<template>
  <div v-if="projects" class="projects">
    <div class="flex items-center justify-between">
      <h1 class="projects__title">Editar experiências</h1>

      <button class="projects__button">atualizar</button>
    </div>
    <div class="projects__list">
      <div
        v-for="project in projects"
        :key="project.objectID"
        class="projects__list__group"
      >
        cover: {{ project.cover }} <br />
        description: {{ project.description }}<br />
        link: {{ project.link }} <br />
        title: {{ project.title }}<br />
        <ul v-for="(technologie, index) in technologies" :key="index">
          <li>
            technologie: {{ technologie.name }} color: {{ technologie.color }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getprojects } from "../../../services/algolia";
import { ref } from "vue";

const projects = ref(null);

const get = async () => {
  try {
    const { data, status } = await getprojects();
    if (data && status === 200) projects.value = data.hits;
    console.log(projects.value);
  } catch (error) {
    throw new Error(error.message);
  }
};
get();
</script>

<style lang="scss" scoped>
.projects {
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
