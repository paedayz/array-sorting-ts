export function merge(
  collection_1_desc: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const collection_1: number[] = [];

  // reverse collection_1 from max to min to min to max
  for (let i = collection_1_desc.length - 1; i >= 0; i--) {
    collection_1.push(collection_1_desc[i]);
  }

  const result: number[] = [];

  // pointers
  let i = 0;
  let j = 0;
  let k = 0;

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k < collection_3.length
  ) {
    const val1 = i < collection_1.length ? collection_1[i] : Infinity;
    const val2 = j < collection_2.length ? collection_2[j] : Infinity;
    const val3 = k < collection_3.length ? collection_3[k] : Infinity;

    const min = Math.min(val1, val2, val3);

    if (min === val1) {
      result.push(collection_1[i]);
      i++;
    } else if (min === val2) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  return result;
}
