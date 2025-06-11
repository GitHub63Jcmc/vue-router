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
          params: {
            courses: 1
          }
        }">Curso 1</RouterLink>

        <RouterLink :to="{
          name: 'about'
        }">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
