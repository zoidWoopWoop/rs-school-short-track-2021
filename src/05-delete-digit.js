/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const min = Math.min(...(String(n).split('')).map((el) => +el));
  const result = +(String(n).replace(min, ''));
  return result;
}

module.exports = deleteDigit;
