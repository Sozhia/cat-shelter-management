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

/**
 * 
 * @param cats - An array of cat objects. Each cat object has properties such as
 * id, name, age, status, and description.
 * 
 */
export function addCat(cats) {
  const name = window.prompt("Enter the cat's name:");
  if (!name) return; // Si no se introduce un nombre, salir de la función

  const age = window.prompt("Enter the cat's age:");
  if (!age || isNaN(age)) {
    alert("Invalid age. Please enter a number.");
    return;
  }

  const status = window.prompt("Enter the cat's status (Available/Adopted):");
  if (!status || (status !== "Available" && status !== "Adopted")) {
    alert("Invalid status. Please enter 'Available' or 'Adopted'.");
    return;
  }

  const description = window.prompt("Enter a description for the cat:");
  if (!description) return;

  const newCat = {
    id: Date.now(),
    name,
    age: parseInt(age, 10),
    status,
    description,
  };

  cats.push(newCat);
  alert("Cat added successfully!");
}
