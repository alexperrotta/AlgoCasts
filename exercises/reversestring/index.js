// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/* solution 1 - reverse()
Steps:
Turn str into an array
Call reverse method on the array
Join the array back into a string
Return the result
*/

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }



/* soluton 2 - for loop
Steps:
Create an empty string
For each character in the string - take the character and add it to the start of the new string
Return the variable
*/


// function reverse(str) {
// 	let reversed = '';

// 	// ES6 syntax for the for loop
// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// }






/* Solution 3 - reduce()
Recommended in interview
*/

function reverse(str) {
	return str.split('').reduce((reversed, char) => char + reversed, '');
}




module.exports = reverse;


