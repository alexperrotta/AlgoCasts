// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Other common string questions where you can use this same technique
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

// convert the string to an object, the keys are the characters and the values is how many times that character appears


function maxChar(str) {
	// iterate through the string and add each character to the object
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		// add character to charMap, if the character already exists add 1
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	// iterate thru the charMap
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;
