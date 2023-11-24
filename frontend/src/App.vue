<script setup lang="ts">
import { useMainStore } from "./store/main";

const store = useMainStore();
</script>

<template>
  <h1 class="text-4xl bg-red-400">Hello {{ store.counter }}</h1>
  <router-view></router-view>
</template>
