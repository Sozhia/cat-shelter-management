<template>
  <div class="cat-list-container">
    <h2 class="text-xl font-bold">Add a New Cat</h2>
  <form @submit.prevent="addNewCat" class="flex flex-col gap-2">
    <input
      type="text"
      v-model="newCatName"
      placeholder="Name"
      class="border p-2 rounded"
      required
    />
    <select v-model="newCatStatus" class="border p-2 rounded">
      <option value="Available">Available</option>
      <option value="Adopted">Adopted</option>
    </select>
    <input
      type="number"
      v-model="newCatAge"
      placeholder="Age"
      class="border p-2 rounded"
      required
    />
    <textarea
      v-model="newCatDescription"
      placeholder="Description"
      class="border p-2 rounded"
      required
    ></textarea>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Cat</button>
  </form>

    <ul>
    <li v-for="cat in cats" :key="cat.id" class="mb-4 p-4 border rounded">
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
      filterStatus: "All",
    };
  },
  methods: {
    addNewCat() {
      if (this.newCatName && this.newCatAge && this.newCatDescription) {
        addCat(this.newCatName, this.newCatStatus, this.newCatAge, this.newCatDescription);
        this.cats = getCats(); 
        this.newCatName = "";
        this.newCatStatus = "Available";
        this.newCatAge = "";
        this.newCatDescription = "";
      } else {
        alert("Please fill in all the fields.");
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
</style>
