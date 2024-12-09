function swapRowsWithMaxAndMinElements(matrix: number[][]): number[][] {
  // Знаходимо індекс рядка з максимальним елементом
  let maxRowIndex = 0;
  let maxElement = matrix[0][0];

  // Знаходимо індекс рядка з мінімальним елементом
  let minRowIndex = 0;
  let minElement = matrix[0][0];

  // Пошук максимального та мінімального елементів
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxElement) {
        maxElement = matrix[i][j];
        maxRowIndex = i;
      }

      if (matrix[i][j] < minElement) {
        minElement = matrix[i][j];
        minRowIndex = i;
      }
    }
  }

  // Створюємо копію матриці для уникнення змін в оригіналі
  const newMatrix = matrix.map((row) => [...row]);

  // Міняємо рядки місцями
  if (maxRowIndex !== minRowIndex) {
    [newMatrix[maxRowIndex], newMatrix[minRowIndex]] = [
      newMatrix[minRowIndex],
      newMatrix[maxRowIndex],
    ];
  }

  return newMatrix;
}

// Приклад використання
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Матриця до перестановки:");
console.table(matrix);

const result = swapRowsWithMaxAndMinElements(matrix);

console.log("Матриця після перестановки:");
console.table(result);
