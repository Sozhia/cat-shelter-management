let cats = [
  { id: 1, name: "Whiskers", status: "Available" },
  { id: 2, name: "Fluffy", status: "Adopted" },
];

/**
 * The getCats function returns a list of cats.
 * @returns The `cats` array is being returned.
 */
export const getCats = () => {
  return cats;
};

/**
 * The addCat function adds a new cat with a given name and sets its status as
 * "Available" with an auto-incremented ID.
 * @param name - The `name` parameter in the `addCat` function represents the name
 * of the cat that will be added to the `cats` array.
 */
export const addCat = (name) => {
  const newCat = {
    id: cats.length + 1, // Auto-increment ID
    name,
    status: "Available",
  };
  cats.push(newCat);
};

/**
 * The function `toggleCatStatus` toggles the status of a cat between "Available"
 * and "Adopted" based on the provided cat ID.
 * @param id - The `id` parameter is used to identify the specific cat whose status
 * needs to be toggled between "Available" and "Adopted".
 */
export const toggleCatStatus = (id) => {
  const cat = cats.find((cat) => cat.id === id);
  if (cat) {
    cat.status = cat.status === "Available" ? "Adopted" : "Available";
  }
};

/**
 * The `deleteCat` function removes a cat from an array of cats based on its id.
 * @param id - The `id` parameter in the `deleteCat` function represents the unique
 * identifier of the cat that needs to be deleted from the `cats` array. The
 * function filters out the cat with the specified `id` from the array.
 */
export const deleteCat = (id) => {
  cats = cats.filter((cat) => cat.id !== id);
};