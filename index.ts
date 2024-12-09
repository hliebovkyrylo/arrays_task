function hasZeroSumSubarray(arr: number[]): boolean {
  const prefixSumSet = new Set<number>();
  let prefixSum = 0;

  for (const num of arr) {
    prefixSum += num;

    if (prefixSum === 0 || prefixSumSet.has(prefixSum)) {
      return true;
    }

    prefixSumSet.add(prefixSum);
  }

  return false;
}

const array1 = [3, 4, -7, 1, 2, -1, 6];
// const array2 = [1, 2, 3, 4, 5];
console.log(hasZeroSumSubarray(array1));
