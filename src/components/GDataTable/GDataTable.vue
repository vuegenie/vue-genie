<template>
  <component
    :is="render"
    :headers="headers"
    :items="items"
    v-bind="componentProps"
  >
  </component>
</template>

<script lang="ts" setup>
import { computed, defineComponent, defineProps } from "vue";
import { getRender } from "./renders";

defineComponent({
  name: "GDataTable",
});

defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
  componentProps: {
    type: Object,
    default: () => {
      new Object();
    },
  },
});

const frameworkName = computed(() => {
  return "vanilla"; // TODO dynamic global config read
});

const render = computed(() => {
  return getRender(frameworkName.value);
});
</script>
