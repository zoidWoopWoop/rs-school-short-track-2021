/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr2 = s2.split('');

  return s1.split('').reduce((result, el) => {
    if (!arr2.includes(el)) {
      return result;
    }

    arr2.splice(arr2.indexOf(el), 1);
    return result + 1;
  }, 0);
}

module.exports = getCommonCharacterCount;
