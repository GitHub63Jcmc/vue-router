<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <h1>This is an course page</h1>

    <ul>
      <li>
        <RouterLink :to="{ 
          name: 'courseDetail',
          params: {
            courseId: 1
          }
        }">Curso 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ 
          name: 'courseDetail',
          params: {
            courseId: 2
          }
        }">Curso 2</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ 
          name: 'courseDetail',
          params: {
            courseId: 3
          }
        }">Curso 3</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>

</style>