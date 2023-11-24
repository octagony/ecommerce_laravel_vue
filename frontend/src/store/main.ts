import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const counter = ref(0);
  const doublecCount = computed(() => counter.value * 2);
  const increment = () => counter.value++;

  return { counter, doublecCount, increment };
});
