import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let newArr =[];
for (let i=0; i<arr.length; i++){
	if (arr[i]!= (-1)){
		newArr.push(arr[i])
	}
}
console.log(newArr)
  if (newArr.length === 0) {
    console.log(arr);
  }

  let sortedArr = newArr.sort((a, b) => a - b);

  let result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
	 
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      result.push(sortedArr[j]);
      j++;
    }
  }
  return (result);
}
