<template>
    <video :src="url"></video>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const url = route.query.url
console.log(location, 999999)
</script>