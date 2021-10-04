import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let dnsStats = {};

let result=[];


for (let i=0; i<domains.length; i++) {
	result=domains[i].split(".").reverse();
  let key ="";
	for (let j=0; j<result.length; j++){
		key = key+"."+result[j];
    
		if (dnsStats[key] == true) {
			dnsStats[key] += 1;
		} else {
			dnsStats[key]=1;
		}
		
	}

}

return dnsStats;
  
}
