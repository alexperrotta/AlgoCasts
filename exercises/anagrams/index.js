// good interview question

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// build a character map for each string and compare the 2

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	// if one string is greater in length than the other, it's not an anagram
	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;

}

// helper function, character map
function buildCharMap(str) {
	const charMap = {};

	// this is regex to remove spaces and punctuation and replace with empty string
	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
}




// solution 2 - use sort


function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}


function cleanString() {
	// can only use sort on an array, have to turn the string to an array and then turn back into a string
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



module.exports = anagrams;
