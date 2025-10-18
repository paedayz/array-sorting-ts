import { merge } from "./merge";

// max to min
const COLLECTION_1 = [9, 7, 5, 3, 1];
// min to max
const COLLECTION_2 = [2, 4, 6, 8];
const COLLECTION_3 = [1, 3, 5, 7];

console.log("Collection 1:", COLLECTION_1);
console.log("Collection 2:", COLLECTION_2);
console.log("Collection 3:", COLLECTION_3);

const result = merge(COLLECTION_1, COLLECTION_2, COLLECTION_3);
console.log("Merged result (ascending):", result);

export { merge };
