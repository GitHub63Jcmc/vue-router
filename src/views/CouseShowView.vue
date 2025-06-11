<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue';

    const route = useRoute();
    // const courseId = computed(() => route.params.courseId);
    const courses = computed(() => route.params.courses);

</script>

<template>
  <div class="about">
    <!-- <h1>Bienvenido al curso: {{ $route.params.courseId }}</h1> -->
    <!-- <h1>Bienvenido al curso: {{ courseId }}</h1> -->
    <h1>Bienvenido al curso: {{ courses }}</h1>
  </div>
</template>

<style>

</style>