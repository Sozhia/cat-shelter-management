<template>
  <div class="cat-list-container">
    <h1 class="text-2xl font-bold mb-4">Cat Management</h1>
    
    <form @submit.prevent="addNewCat" class="mb-4">
      <input
        type="text"
        v-model="newCatName"
        placeholder="Enter cat name"
        class="border p-2 mr-2 rounded"
      />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Cat</button>
    </form>

    <ul>
      <li v-for="cat in cats" :key="cat.id" class="mb-2">
        {{ cat.name }} - {{ cat.status }}
        <button
          @click="toggleStatus(cat.id)"
          class="ml-4 bg-green-500 text-white p-1 rounded"
        >
          Toggle Status
        </button>
        <button
          @click="removeCat(cat.id)"
          class="ml-2 bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <label for="filter" class="mr-2">Filter by Status:</label>
    <select id="filter" v-model="filterStatus" @change="filterCats">
      <option value="All">All</option>
      <option value="Available">Available</option>
      <option value="Adopted">Adopted</option>
    </select>
  </div>

  <div class="mb-4">
    <p>Total Cats: {{ cats.length }}</p>
    <p>Available: {{ availableCount }}</p>
    <p>Adopted: {{ adoptedCount }}</p>
  </div>

</template>

<script>
import { getCats, addCat, toggleCatStatus } from "../js/CatList";

export default {
  name: "CatList",
  data() {
    return {
      cats: getCats(),
      newCatName: "",
      filterStatus: "All", // All cats by default
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
    removeCat(id) {
      deleteCat(id); // Delete cat
      this.cats = getCats(); // Update list  
    },
    filterCats() {
      const allCats = getCats();
      if (this.filterStatus === "All") {
        this.cats = allCats;
      } else {
        this.cats = allCats.filter((cat) => cat.status === this.filterStatus);
      }
    },
  },

  computed: {
    availableCount() {
      return this.cats.filter((cat) => cat.status === "Available").length;
    },
    adoptedCount() {
      return this.cats.filter((cat) => cat.status === "Adopted").length;
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
