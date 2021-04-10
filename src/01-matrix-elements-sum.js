/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let result = 0;

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      if (matrix[i][j] === 0) {
        break;
      }
      result += matrix[i][j];
    }
  }

  return result;
}

module.exports = getMatrixElementsSum;
