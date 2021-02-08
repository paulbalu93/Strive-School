/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1,l2)  { 
    return l1*l2;

}

console.log("area of rectangle is ",area(2,3));



/* EXERCISE 2
Write a function "cffrazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(x1,x2){
    if(x1===x2)
    return ((x1+x2)*3)
    else
    return x1+x2;
}
let result = crazySum(3,3);
console.log(result);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(x)  {
    if(x<19)
   return Math.abs(x-19)
   else
   return 3*(Math.abs(x-19))
}

console.log("CrazzyDiff", crazyDiff(21))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function(n) {
if(n>20&&n<101)
return true

}
console.log("boundary is", boundary(45))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
const strivify = function(m)
{
    if(m.startsWith('strive'))
    return m
    else
    s = 'Strive' + s;
		return s;
}
console.log(strivify('sriver'))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = (d) => {
	if (Math.sign(d) == 1) {
		if (d % 3 == 0 || d % 7 == 0) return true;
		else return false;
	} else return false;
};
console.log(check3and7(14));

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = (s1) => {
	let s2 = s1.split('');
	let s3 = s2.reverse();
	let s4 = s3.join('');
	return s4;
};
console.log(reverseString('strive'));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

const upperFirst = function (str) {
	var splitStr = str.toLowerCase().split(' ');

	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}

	return splitStr.join(' ');
};

console.log(upperFirst('what is up strivers'));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = function (stringed) {
	let h = stringed.length;
	return stringed.slice(1, h - 1);
};
console.log(cutString('Strive'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr[i] = Math.floor(Math.random() * 10);
	}
	console.log(arr);
}
giveMeRandom(5);

