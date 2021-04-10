/* eslint-disable no-unused-expressions */
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {
  };
  for (let i = 0; i < domains.length; i++) {
    const str = domains[i].split('.').reverse();
    if (result[`.${str[0]}`] === undefined) {
      result[`.${str[0]}`] = 1;
    } else {
      result[`.${str[0]}`] += 1;
    }
    if (result[`.${str[0]}.${str[1]}`] === undefined) {
      result[`.${str[0]}.${str[1]}`] = 1;
    } else {
      result[`.${str[0]}.${str[1]}`] += 1;
    }
    if (result[`.${str[0]}.${str[1]}.${str[2]}`] === undefined) {
      result[`.${str[0]}.${str[1]}.${str[2]}`] = 1;
    } else {
      result[`.${str[0]}.${str[1]}.${str[2]}`] += 1;
    }
    if (result[`.${str[0]}.${str[1]}.undefined`] || result[`.${str[0]}.undefined`]) {
      delete result[`.${str[0]}.${str[1]}.${str[2]}`];
    }
  }
  return result;
}
module.exports = getDNSStats;
