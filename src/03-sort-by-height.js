/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const reservePosition = [];
  const element = -1;
  let idx = arr.indexOf(element);
  while (idx !== -1) {
    reservePosition.push(idx);
    idx = arr.indexOf(element, idx + 1);
  }
  const result = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  for (let i = 0; i < reservePosition.length; i++) {
    sorted.splice(reservePosition[i], 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
