import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let newArr = [];

  for (let i=0; i<arr.length; i++){
    if (i ==0 && arr[i] =='--discard-prev' || i ==0 && arr[i] =='--double-prev') {
      newArr = newArr;
    } else if (i ==arr.length-1 && arr[i] =='--double-next' || i ==arr.length-1 && arr[i] =='--discard-next'){
      newArr = newArr;
    } else if (arr[i] == '--double-prev' && arr[i-2] =='--discard-next'){
      newArr = newArr;
    } else if (arr[i] == '--discard-prev' && arr[i-2] =='--discard-next'){
      newArr = newArr;
    } else if (arr[i] == '--double-next'){
      newArr.push(arr[i+1]);
    } else if (arr[i] == '--discard-prev'){
      newArr.pop();
    } else if (arr[i] == '--double-prev'){
      newArr.push(arr[i-1]);
    } else if (arr[i] == '--discard-next'){
      i=i+1;
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
