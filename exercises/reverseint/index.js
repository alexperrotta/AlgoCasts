// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign()
// toString()
// parseInt()

function reverseInt(n) {
	const reversed =  n.toString().split('').reverse().join('');

	// Math.sign() will return a positive number or a negative number
	return parseInt(reversed) * Math.sign(n);

}

module.exports = reverseInt;
