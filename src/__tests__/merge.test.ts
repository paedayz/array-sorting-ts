import { merge } from "../merge";

describe("merge function", () => {
  describe("Basic functionality", () => {
    test("should merge three arrays correctly", () => {
      const collection_1 = [9, 7, 5, 3, 1];
      const collection_2 = [2, 4, 6, 8];
      const collection_3 = [1, 3, 5, 7];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9];

      expect(result).toEqual(expected);
    });

    test("should handle arrays with different lengths", () => {
      const collection_1 = [5, 3, 1];
      const collection_2 = [2, 4, 6, 8, 10];
      const collection_3 = [1];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [1, 1, 2, 3, 4, 5, 6, 8, 10];

      expect(result).toEqual(expected);
    });
  });

  describe("Edge cases", () => {
    test("should handle empty arrays", () => {
      const collection_1: number[] = [];
      const collection_2: number[] = [];
      const collection_3: number[] = [];

      const result = merge(collection_1, collection_2, collection_3);
      expect(result).toEqual([]);
    });

    test("should handle one empty array", () => {
      const collection_1 = [3, 2, 1];
      const collection_2: number[] = [];
      const collection_3 = [4, 5, 6];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [1, 2, 3, 4, 5, 6];

      expect(result).toEqual(expected);
    });

    test("should handle single element arrays", () => {
      const collection_1 = [5];
      const collection_2 = [3];
      const collection_3 = [7];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [3, 5, 7];

      expect(result).toEqual(expected);
    });
  });

  describe("Duplicate values", () => {
    test("should handle duplicate values correctly", () => {
      const collection_1 = [5, 5, 3, 1];
      const collection_2 = [1, 3, 5];
      const collection_3 = [2, 4, 6];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6];

      expect(result).toEqual(expected);
    });

    test("should handle all same values", () => {
      const collection_1 = [3, 3, 3];
      const collection_2 = [3, 3];
      const collection_3 = [3];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [3, 3, 3, 3, 3, 3];

      expect(result).toEqual(expected);
    });
  });

  describe("Negative numbers", () => {
    test("should handle negative numbers correctly", () => {
      const collection_1 = [5, 0, -5];
      const collection_2 = [-3, -1, 2];
      const collection_3 = [-2, 1, 4];

      const result = merge(collection_1, collection_2, collection_3);
      const expected = [-5, -3, -2, -1, 0, 1, 2, 4, 5];

      expect(result).toEqual(expected);
    });
  });

  describe("Large arrays", () => {
    test("should handle larger arrays efficiently", () => {
      const collection_1 = Array.from({ length: 100 }, (_, i) => 100 - i);
      const collection_2 = Array.from({ length: 50 }, (_, i) => i * 2);
      const collection_3 = Array.from({ length: 75 }, (_, i) => i * 3);

      const result = merge(collection_1, collection_2, collection_3);

      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }

      expect(result.length).toBe(225);
    });
  });

  describe("Validation", () => {
    test("should maintain asc order in result", () => {
      const collection_1 = [10, 8, 6, 4, 2];
      const collection_2 = [1, 3, 5, 7, 9];
      const collection_3 = [0, 2, 4, 6, 8];

      const result = merge(collection_1, collection_2, collection_3);

      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });

    test("should preserve all elements from input arrays", () => {
      const collection_1 = [5, 3, 1];
      const collection_2 = [2, 4];
      const collection_3 = [6, 8];

      const result = merge(collection_1, collection_2, collection_3);

      const allInputElements = [
        ...collection_1,
        ...collection_2,
        ...collection_3,
      ];
      expect(result.length).toBe(allInputElements.length);

      for (const element of allInputElements) {
        expect(result).toContain(element);
      }
    });
  });
});
