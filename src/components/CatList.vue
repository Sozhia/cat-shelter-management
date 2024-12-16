<template>
  <div class="cat-list-container">
    <h1 class="text-2xl font-bold mb-4">Cat Management</h1>
    
    <!-- Formulario para agregar gatos -->
    <form @submit.prevent="addNewCat" class="mb-4">
      <input
        type="text"
        v-model="newCatName"
        placeholder="Enter cat name"
        class="border p-2 mr-2 rounded"
      />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Cat</button>
    </form>

    <!-- Lista de gatos -->
    <ul>
      <li v-for="cat in cats" :key="cat.id" class="mb-2">
        {{ cat.name }} - {{ cat.status }}
        <button
          @click="toggleStatus(cat.id)"
          class="ml-4 bg-green-500 text-white p-1 rounded"
        >
          Toggle Status
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCats, addCat, toggleCatStatus } from "../js/CatList";

export default {
  name: "CatList",
  data() {
    return {
      cats: getCats(),
      newCatName: "", // Form input
    };
  },
  methods: {
    addNewCat() {
      if (this.newCatName.trim()) {
        addCat(this.newCatName); // Add cat
        this.cats = getCats(); // Update list
        this.newCatName = ""; // Clear form
      }
    },
    toggleStatus(id) {
      toggleCatStatus(id); // Update status
      this.cats = getCats(); // Update list
    },
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
input {
  border: 1px solid #ddd;
  padding: 0.5rem;
}
button {
  cursor: pointer;
}
</style>
