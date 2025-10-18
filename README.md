# Array Sorting TypeScript

A TypeScript library that efficiently merges three sorted arrays into a single sorted array using a three-way merge algorithm.

## Features

- **Efficient Three-Way Merge**: Merges three sorted arrays in O(n) time complexity
- **TypeScript Support**: Full TypeScript definitions and type safety
- **Comprehensive Testing**: Extensive test suite with edge cases and performance tests
- **Zero Dependencies**: No external dependencies required for the core functionality
- **Handles Edge Cases**: Works with empty arrays, single elements, duplicates, and negative numbers

## Usage

### Basic Usage

```typescript
import { merge } from "array-sorting";

// Three sorted arrays
const collection1 = [9, 7, 5, 3, 1]; // descending order
const collection2 = [2, 4, 6, 8]; // ascending order
const collection3 = [1, 3, 5, 7]; // ascending order

// Merge into a single sorted array
const result = merge(collection1, collection2, collection3);
console.log(result); // [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]
```

### API Reference

#### `merge(collection_1_desc: number[], collection_2: number[], collection_3: number[]): number[]`

Merges three sorted arrays into a single sorted array in ascending order.

**Parameters:**

- `collection_1_desc`: Array sorted in descending order (max to min)
- `collection_2`: Array sorted in ascending order (min to max)
- `collection_3`: Array sorted in ascending order (min to max)

**Returns:**

- `number[]`: A new array containing all elements from the input arrays, sorted in ascending order

**Time Complexity:** O(n) where n is the total number of elements across all three arrays
**Space Complexity:** O(n) for the result array

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd array-sorting
```

2. Install dependencies:

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

### Available Scripts

**Using npm:**

```bash
# Build the project
npm run build

# Run the development build
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Start the built application
npm start
```

**Using yarn:**

```bash
# Build the project
yarn build

# Run the development build
yarn dev

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Start the built application
yarn start
```

### Building

The project uses TypeScript and compiles to JavaScript in the `dist/` directory.

**Using npm:**

```bash
npm run build
```

**Using yarn:**

```bash
yarn build
```

### Testing

The project includes comprehensive tests using Jest and ts-jest.

**Using npm:**

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

**Using yarn:**

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch
```

## Examples

### Example 1: Basic Merge

```typescript
import { merge } from "array-sorting";

const arr1 = [5, 3, 1]; // descending
const arr2 = [2, 4, 6]; // ascending
const arr3 = [1, 3, 5]; // ascending

const result = merge(arr1, arr2, arr3);
// Result: [1, 1, 2, 3, 3, 4, 5, 5, 6]
```

### Example 2: Handling Empty Arrays

```typescript
import { merge } from "array-sorting";

const arr1 = [3, 2, 1]; // descending
const arr2 = []; // empty
const arr3 = [4, 5, 6]; // ascending

const result = merge(arr1, arr2, arr3);
// Result: [1, 2, 3, 4, 5, 6]
```

### Example 3: Negative Numbers

```typescript
import { merge } from "array-sorting";

const arr1 = [5, 0, -5]; // descending
const arr2 = [-3, -1, 2]; // ascending
const arr3 = [-2, 1, 4]; // ascending

const result = merge(arr1, arr2, arr3);
// Result: [-5, -3, -2, -1, 0, 1, 2, 4, 5]
```

## Algorithm Details

The merge function uses a three-way merge algorithm with the following approach:

1. **Reverse the first array**: Since the first array is in descending order, it's reversed to ascending order
2. **Three-pointer technique**: Uses three pointers to track positions in each array
3. **Minimum selection**: At each step, finds the minimum value among the current elements
4. **Merge**: Adds the minimum element to the result and advances the corresponding pointer
5. **Handle remaining elements**: Continues until all arrays are exhausted

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

The project includes comprehensive test coverage for:

- Basic functionality
- Edge cases (empty arrays, single elements)
- Duplicate values
- Negative numbers
- Large arrays
- Input validation

Run the test suite to ensure everything works correctly:

**Using npm:**

```bash
npm test
```

**Using yarn:**

```bash
yarn test
```
