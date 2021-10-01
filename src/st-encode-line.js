import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let number = 0;
  let symbol  = '';
  let result = '';
  for (let i of str) {
      if (i !== symbol && number) {
        if (number == 1) {
          result = result+''+symbol;
        } else {
          result=result+String(number)+ symbol
        }
          symbol = i;
          number = 1;
      } else {
          symbol = i;
          number ++;
      }
  }

  if (number == 0) {
    number = 1;
  } else {
    number = number;
  }

  if (number == 1) {
    result = result+''+symbol;
  } else {
    result = result+String(number) +symbol;
  }

  return result;
}
