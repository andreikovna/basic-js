import { NotImplementedError } from "../extensions/index.js";

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
export default function deleteDigit(n) {
  let result = n.toString();
  let max = 0;

  for (let i = 0; i < result.length; i++) {
    if (i == 0) {
      max = +result.slice(1);
    } else {
      let str = +(result.slice(0, i) + result.slice(i + 1));
      if (max < str) {
        max = str;
      }
    }
  }
  return max;
}
