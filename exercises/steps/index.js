// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/*
From 0 to n (iterate through rows)
	Create an emptry string 'stair'
	From 0 to n (iterate through columns)
		If the current column is equal to or less than the current row
			Add a '#' to 'stair'
		Else
			Add a space to 'stair'
		Console log 'stair'
*/

// Solution 1 - use this in interviews

function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';

		for (let column = 0; column < n; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair =+ ' '; // space
			}
		}
		console.log(stair);
	}
}


// Solution 2 - using recursion
/*
base case - if (row === n) the we have hit the end of our problem
if the 'stair' string has a length === n then we are at the end of the row
if the length of the stair string is less than or equal to the row number, we add
'#', otherwise add a space
*/

function steps(n, row = 0, stair = '') {
	// base case
	if (n === row) {
		return;
	}

	// case when we've hit the end of a row
	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	steps(n, row, stair);
}

module.exports = steps;
