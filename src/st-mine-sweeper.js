import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let mine = new Array(matrix.length);
let result = new Array(matrix.length);

for (let i = 0; i < mine.length; i++) {
  mine[i] = new Array(matrix[0].length);
	result[i] = new Array(matrix[0].length);
}

for (let i=0; i < matrix.length; i++) {
	for (let j=0; j < matrix[i].length; j++){
		if (matrix[i][j] == true) {
			mine[i][j] = 1;
			
		} else {
			mine[i][j] = 0;
		}
	}
}

for (let i=0; i<mine.length; i++){
	for (let j=0; j<mine[i].length; j++) {
		if (i == 0 & j == 0){
			result[i][j] = mine[i][j+1]+mine[i+1][j]+mine[i+1][j+1]
		} else if ( i==0 & j == mine[i].length-1) {
			result[i][j] = mine[i][j-1]+mine[i+1][j]+mine[i+1][j-1]
		} else if (i==0){
		result[i][j] = mine[i][j-1]+mine[i][j+1]+mine[i+1][j-1]+mine[i+1][j+1] + mine[i+1][j]
	} else if (i==mine.length-1 & j == 0){
	result[i][j] = mine[i-1][j]+mine[i-1][j+1]+mine[i][j+1]
	} else if (i==mine.length-1 & j==mine[i].length-1){
result[i][j] = mine[i-1][j]+mine[i-1][j-1]+mine[i][j-1]
	} else if (i==mine.length-1) {
result[i][j] = 	mine[i][j-1]+mine[i][j+1]+mine[i-1][j-1]+mine[i-1][j+1]+mine[i-1][j]
	} else if (j==0){
result[i][j] = mine[i-1][j]+mine[i-1][j+1]+mine[i][j+1]+mine[i+1][j+1]+mine[i+1][j]		
	} else if (j==mine[i].length-1){
result[i][j] = mine[i-1][j]+mine[i-1][j-1]+mine[i][j-1]+mine[i+1][j-1]+mine[i+1][j]		
	} else {
result[i][j] = mine[i-1][j-1]+mine[i-1][j]+mine[i-1][j+1]+mine[i][j-1]+mine[i][j+1]+mine[i+1][j-1]+mine[i+1][j]+mine[i+1][j+1]	
	}
}
}
return result;
}
