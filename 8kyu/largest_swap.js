/* Write a function that checks a two-digit number if it's the largest of two possible digit swaps.

Examples:

false  == solution(14)
false  == solution(27)
true  == solution(43)
true  == solution(87)
false  == solution(99)
*/

//My solution

const solution = (number) => number > String(number).split('').reverse().join('');
