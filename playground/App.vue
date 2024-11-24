<template>
  <img alt="Vue logo" src="./assets/logo.png" width="200px" />
  <HelloWorld msg="Welcome to VueGenie" />

  <div style="margin-top: 100px">
    <h2>Table</h2>
    <div class="d-flex justify-center" style="margin-top: 50px">
      <GDataTable
        :headers="headers"
        :items="employees"
        :componentProps="{ border: true }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { GDataTable } from "./../dist/vue-genie.es";
import HelloWorld from "./components/HelloWorld.vue";

defineComponent({
  name: "App",
});

const headers = ref([
  { label: "Name", key: "name" },
  { label: "Position", key: "position" },
  { label: "Status", key: "status", options: { align: "center" } },
]);

const employees = ref([
  { name: "Alice Johnson", position: "Software Engineer", status: "Active" },
  { name: "Bob Smith", position: "Designer", status: "Inactive" },
  { name: "Charlie Brown", position: "Product Manager", status: "Active" },
]);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.d-flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
</style>
