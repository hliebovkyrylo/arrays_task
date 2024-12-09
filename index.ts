function bitwiseComparison(
  arr1: number[],
  arr2: number[]
): { decimal: number; hex: string }[] {
  const result = arr1.map((num1, i) => {
    const num2 = arr2[i];
    const bitwiseResult = num1
      .toString(2)
      .padStart(16, "0")
      .split("")
      .map((bit, index) =>
        bit === num2.toString(2).padStart(16, "0")[index] ? "1" : "0"
      )
      .join("");

    const decimalResult = parseInt(bitwiseResult, 2);
    const hexResult = decimalResult.toString(16).toUpperCase();
    return { decimal: decimalResult, hex: hexResult };
  });

  return result;
}

// Приклад масивів
const arr1 = [45158, 12345, 56789, 54321, 22222, 10000, 9999, 1234, 5678, 8765];
const arr2 = [7125, 54321, 12345, 67890, 11111, 20000, 8888, 5678, 4321, 7654];

const result = bitwiseComparison(arr1, arr2);

// Виведення результатів
result.forEach((res, i) => {
  console.log(`Result [${i}]: Decimal: ${res.decimal}, Hex: ${res.hex}`);
});
