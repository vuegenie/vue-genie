<template>
  <table>
    <thead>
      <th v-for="(header, index) in headers" :key="index">
        {{ (header as HeaderDefinition).label }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(header, index) in headers" :key="index">
          {{ (item as any)[(header as HeaderDefinition).key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { HeaderDefinition } from "./../../../../../types/GDataTable";
import { computed, defineComponent, defineProps } from "vue";

defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
