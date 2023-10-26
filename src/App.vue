<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <RouterView class="route-view" /> -->
  <router-view v-slot="{ Component }">
    <keep-alive :include="['homePage', 'recommendPage']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped>
</style>
