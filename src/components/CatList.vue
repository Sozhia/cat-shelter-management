<template>
  <div class="cat-list-container">
    <h1 class="text-2xl font-bold mb-4">Cat List</h1>
    <ul>
      <li v-for="cat in cats" :key="cat.id" class="mb-2">
        {{ cat.name }} - {{ cat.status }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCats } from "../js/CatList";

export default {
  name: "CatList",
  data() {
    return {
      cats: getCats(),
    };
  },
};
</script>

<style scoped>
.cat-list-container {
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>