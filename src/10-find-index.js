/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

let count = 0;

function findIndex(array, value) {
  if (array[0] === value) {
    return count;
  }
  array.shift();
  count++;
  return findIndex(array, value);
}
module.exports = findIndex;
