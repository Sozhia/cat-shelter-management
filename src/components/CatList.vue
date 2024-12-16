<template>
  <div class="flex flex-col h-screen">
    <!-- Filtro Horizontal -->
    <div class="bg-gray-200 p-4 shadow">
      <div class="flex gap-4 items-center">
        <button @click="handleAddCat" class="bg-blue-500 text-white py-2 px-4 rounded">
          Add New Cat
        </button>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name"
          class="border p-2 rounded w-1/4"
        />
        <select v-model="filterStatus" class="border p-2 rounded">
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Adopted">Adopted</option>
        </select>
        <input
          type="number"
          v-model="filterMinAge"
          placeholder="Min Age"
          class="border p-2 rounded w-1/6"
        />
        <input
          type="number"
          v-model="filterMaxAge"
          placeholder="Max Age"
          class="border p-2 rounded w-1/6"
        />
      </div>
    </div>

    <div class="flex flex-1">
      <div class="flex-1 p-4 bg-white overflow-y-auto">
        <h2 class="text-xl font-bold mb-4">Cat List</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="cat in filteredCats"
            :key="cat.id"
            class="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 class="text-lg font-bold mb-2">{{ cat.name }}</h3>
            <p><strong>Status:</strong> {{ cat.status }}</p>
            <p><strong>Age:</strong> {{ cat.age }}</p>
            <p class="mb-4"><strong>Description:</strong> {{ cat.description }}</p>
            <div class="flex justify-between">
              <button
                @click="toggleStatus(cat.id)"
                class="bg-green-500 text-white py-1 px-3 rounded"
              >
                Toggle Status
              </button>
              <button
                @click="removeCat(cat.id)"
                class="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vista Detallada (Reservado) -->
      <div class="w-1/3 p-4 bg-gray-100 border-l shadow">
        <h2 class="text-xl font-bold">Cat Details</h2>
        <p class="text-gray-500 italic">Select a cat to view details</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCats, addCat, toggleCatStatus, deleteCat } from "../js/CatList";

export default {
  name: "CatList",
  data() {
    return {
      cats: getCats(),
      searchQuery: "",
      filterStatus: "All",
      filterMinAge: "",
      filterMaxAge: "",
    };
  },
  methods: {
    handleAddCat() {
      addCat(this.cats);
    },
    toggleStatus(id) {
      toggleCatStatus(id); // Update status
      this.cats = getCats(); // Update list
    },
    removeCat(id) {
      deleteCat(id); // Delete cat
      this.cats = getCats(); // Update list
    },
  },
  computed: {
    filteredCats() {
      return this.cats.filter((cat) => {
        const matchesName = cat.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus =
          this.filterStatus === "All" || cat.status === this.filterStatus;
        const matchesAge =
          (!this.filterMinAge || cat.age >= this.filterMinAge) &&
          (!this.filterMaxAge || cat.age <= this.filterMaxAge);
        return matchesName && matchesStatus && matchesAge;
      });
    },
  },
};
</script>

<style scoped>
.cat-list-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
button {
  cursor: pointer;
}
</style>
