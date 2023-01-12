/*
Create a function that calculates kinetic energy with the following formula: KE = 1/2 * m * v^2 m is mass in kg, v is velocity in m/s, KE is kinetic energy in J. Round answer to the nearest integer.

Examples:

270  == solution(60, 3)
2250  == solution(45, 10)
11000  == solution(55, 20)
*/

// My solution

const solution = (mass, velocity) => Math.ceil((velocity ** 2) * mass / 2);
