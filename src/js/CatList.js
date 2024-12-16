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
 * The function `addCat` adds a new cat object to an array of cats.
 * @param name - The name of the cat being added.
 * @param status - The status of the cat being added.
 * @param age - The age of the cat being added.
 * @param description - The description parameter is a string that represents the
 * description of the cat being added.
 */
export const addCat = (name, status, age, description) => {
  const newCat = {
    id: Date.now(),
    name,
    status,
    age,
    description,
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