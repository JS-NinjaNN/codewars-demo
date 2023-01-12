/*
Create a function which takes 2 parameters (first and second) and locates the first occurrence of the second in the first and returns it's position, -1 if not found.

Examples:

5  == solution("some str", "st")
-1  == solution("some str", "11")
1  == solution("some str", "ome")
0  == solution("test", "t")
*/

// My solution

const solution = (first, second) => first.indexOf(second);
