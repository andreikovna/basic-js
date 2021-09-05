import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members == null || members.length == 0){
    return false;
  }

  let result ="";
  for (let i=0; i<members.length; i++) {
	let x = typeof members[i];
    if (x == 'string'){
      result = result + members[i].trim().slice(0,1);
      result = result.toUpperCase();
      result = result.split('').sort().join('');
    }
  }
  
  return result;
}
