<template>

<div class="mb-4">
  <div class="mb-4">
      <button @click="handleAddCat" class="bg-blue-500 text-white py-2 px-4 rounded" >
        Add New Cat
      </button>
  </div>

  <h2 class="text-xl font-bold">Search & Filter Cats</h2>
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Search by name"
    class="border p-2 rounded mr-2"
  />
  <select v-model="filterStatus" class="border p-2 rounded mr-2">
    <option value="All">All</option>
    <option value="Available">Available</option>
    <option value="Adopted">Adopted</option>
  </select>
  <input
    type="number"
    v-model="filterMinAge"
    placeholder="Min Age"
    class="border p-2 rounded mr-2"
  />
  <input
    type="number"
    v-model="filterMaxAge"
    placeholder="Max Age"
    class="border p-2 rounded"
  />
</div>


  <div class="cat-list-container">

  <ul>
    <li v-for="cat in filteredCats" :key="cat.id" class="mb-4 p-4 border rounded">
      <h3 class="text-lg font-bold">{{ cat.name }}</h3>
      <p>Status: {{ cat.status }}</p>
      <p>Age: {{ cat.age }}</p>
      <p>Description: {{ cat.description }}</p>
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
      newCatStatus: "Available",
      newCatAge: "",
      newCatDescription: "",
      searchQuery: "",
      filterStatus: "All",
      filterMinAge: "",
      filterMaxAge: "",
      showModal: false,

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
  /*background-color: ;*/
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

.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  transition: all 0.3s ease-in-out;
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
