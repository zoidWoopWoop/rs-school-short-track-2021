/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const obj = {
  };
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]] += 1;
  }
  return Object.entries(obj)
    .reduce((result, [key, value]) => (value === 1 ? result + key : result + value + key), '');
}

module.exports = encodeLine;
