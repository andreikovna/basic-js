import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }

  if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    typeof date !== "object" ||
    Object.keys(date).length > 0 ||
    !(date instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }

  let month;
  month = date.getMonth();

  const seasons = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [0, 1, 11],
  };
  for (let key in seasons) {
    if (seasons[key].includes(month)) {
      return key;
    }
  }
}
