<template>
  <div class="home">
    {{ about?.firstName }} {{ about?.lastName }}<br />
    {{ about?.description }} <br />
  </div>
</template>

<script setup>
import { getAbout } from "../../../services/algolia";
import { ref } from "vue";

const about = ref(null);

const get = async () => {
  try {
    const { data, status } = await getAbout();

    if (data && status === 200) about.value = data.hits[0];
  } catch (error) {
    console.log(error);
  }
};

get();
</script>
