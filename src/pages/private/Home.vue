<template>
  <div class="flex justify-between items-center w-full">
    <h1 v-text="`Bem vindo ${user.name}`"></h1>
    <a
      href="https://v1.gabrielcaiana.com"
      class="bg-blue-500 text-white rounded-xl p-2"
    >
      ir para o site
    </a>
  </div>
</template>
<script setup>
import { useLoggedInUserStore } from "@/store/loggedInUser";
const { getUser: user } = useLoggedInUserStore();
</script>
