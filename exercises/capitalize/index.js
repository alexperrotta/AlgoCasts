// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Steps
// Make an empty array "words"
// split the input string by spaces to get an array
// for each word in the array:
	// uppercase the first letter of the word
	// join the first letter with the rest of the string
	// push result into 'words' array
// Join 'words' into a string and return it

function capitalize(str) {
	const words = [];

	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}

	return words.join(' ');
}

// solution 2

function capitalize(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}

	return result;
}

module.exports = capitalize;
