<template>
  <div class="welcome">
    <h1 v-text="`Bem vindo ${user.name}`"></h1>
  </div>
</template>
<script setup>
import { useLoggedInUserStore } from "../../store/loggedInUser";
const { getUser: user } = useLoggedInUserStore();
</script>
