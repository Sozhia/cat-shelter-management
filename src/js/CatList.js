/**
 * The getCats function returns an array of cat objects with their id, name, and
 * status.
 * @returns An array of objects representing cats with their id, name, and status
 * properties.
 */
export const getCats = () => {
  return [
    { id: 1, name: "Whiskers", status: "Available" },
    { id: 2, name: "Fluffy", status: "Adopted" },
  ];
};