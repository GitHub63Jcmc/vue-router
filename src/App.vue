<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink :to="{
          name: 'home'
        }">Home</RouterLink>

        <RouterLink :to="{
          name: 'courses',
        }">Cursos</RouterLink>

        <RouterLink :to="{
          name: 'about'
        }">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
  
<style scoped>
  nav {
    display: flex;
    gap: .5rem;
  }
  nav a {
    text-decoration: none;
  }
</style>
