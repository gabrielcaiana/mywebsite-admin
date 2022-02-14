<template>
  <header class="app__header">
    <router-link to="/home">System Admin</router-link>
    <router-link to="/logout">logout</router-link>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  @apply flex justify-between bg-white py-4 px-6;
}
</style>
