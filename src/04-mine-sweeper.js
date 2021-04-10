/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable no-cond-assign */
/* eslint-disable no-underscore-dangle */
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getCell(row, col) {
    if (row < 0 || col < 0) return 0;
    if (row >= matrix.length) return 0;
    if (col >= matrix[row].length) return 0;
    if (matrix[row][col] === true) return 1;
    return 0;
  }
  const line = [];
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let bombs = 0;
      bombs += getCell(row - 1, col - 1);
      bombs += getCell(row - 1, col);
      bombs += getCell(row - 1, col + 1);

      bombs += getCell(row, col - 1);
      bombs += getCell(row, col + 1);

      bombs += getCell(row + 1, col - 1);
      bombs += getCell(row + 1, col);
      bombs += getCell(row + 1, col + 1);

      if (bombs === 0) bombs++;
      line.push(bombs);
    }
    result.push(line.splice(0, `${matrix[row].length}`));
  }
  if (result.flat(1).reduce((sum, el) => sum + el, 0) === result.flat(1).length) {
    for (let i = 0; i < matrix.length; i++) {
      result[i] = result[i].map((el) => el - 1);
    }
  }
  return result;
}

module.exports = minesweeper;
