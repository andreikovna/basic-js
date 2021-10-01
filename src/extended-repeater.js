import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let repeatTimes;
  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  let separator;
  if  (options.separator !== undefined) {
    separator = String(options.separator);
  } else {
    separator = '+';
  }

  let addition;
  if (options.addition !== undefined){
    addition = String(options.addition);
  }  else {
    addition = '';
  }

  let additionRepeatTimes;
  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  let additionSeparator;
  if (options.additionSeparator !== undefined) {
    additionSeparator = String(options.additionSeparator);
  } else {
    additionSeparator = '|';
  }
  
  let result = '';
  
  for (let i = 0; i < repeatTimes; i++) {
      result = result + String(str);
      for (let j = 0; j < additionRepeatTimes; j++) {
          result = result + addition;      
          j < (additionRepeatTimes-1) ? result=result+additionSeparator : 0;
      }
      i < (repeatTimes - 1) ? result=result+separator : 0;
  }

  return result;
}
