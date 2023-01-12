/* Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

Examples:

false  == solution("There are three types of zeros in JS!")
true  == solution("Learn Clojure Be Happy!")
false  == solution("Learn Ruby win tournaments?!")
true  == solution("Simple Title.")
*/

//My Solution

const solution = (title) => {
	const words = title.split(' ');
	for (const word of words) {
		const firstLetter = word[0];
		if (firstLetter !== firstLetter.toUpperCase()) {
			return false;
		}
	}
	return true;
};
