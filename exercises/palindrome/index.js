// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// solution 1 - reversed()
function palindrome(str) {
	const reversed = str.split('').reverse().join('');

	return str === reversed;
}


// solution 2 - every() - not an ideal solution b/c you are comparing the first to the last element and the last to the first
// this is doing twice the amount of work that we need to do
function palindrome(str) {
	// i is index
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}





module.exports = palindrome;
