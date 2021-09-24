import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const a = s1.split('').sort();
  const b = s2.split('').sort();
  let sum = 0;
  let i = 0;
  let j = 0;
  while (i < a.length) {
    if (j == b.length) break;
    if (a[i] == b[j]) {
      sum +=1;
      i +=1;
      j +=1;
    } else if (a[i] > b[j]) {
      j +=1;
    } else {
      i +=1;
    }
  }
  return sum;
}
