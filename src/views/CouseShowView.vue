<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue';

    const route = useRoute();
    const courseId = computed(() => route.params.courseId);

    console.log(route.params.courseId)
</script>

<template>
  <div class="about">
    <!-- <h1>Bienvenido al curso: {{ $route.params.courseId }}</h1> -->
    <h1>Bienvenido al curso: {{ courseId }}</h1>
  </div>
</template>

<style>

</style>