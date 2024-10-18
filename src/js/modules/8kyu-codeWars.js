/* const multipleOfIndex = array => console.log(array.filter((element, index) => element % index == 0 || element == 0)); */


// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
/* function makeNegative(num) {
	if ( num > 0 ) {
				return -num;
		}
		else {
				return num;
		}
} */

/* function makeNegative(num) {
	if (num < 0) {
		return num;
	}
	return -num;
} */

/* function makeNegative(num) {
	return num < 0 ? num : -num;
} */

// const makeNegative = num => -Math.abs(num);

// Square(n)Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
/* function squareSum(numbers){
	let result = 0;
		for (let i = 0; i < numbers.length; i++) {
			result += numbers[i] ** 2;
		}
		return result;
	} */

// const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0);


// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
/* function numberToString(num) {
	return num.toString();
} */

/* function numberToString(num) {
	return String(num);
} */


// Sum without highest and lowest number
/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation. */
// sumArray = array => array ? array.sort((a,b) => a - b).slice(1, -1).reduce((prev,curr) => prev + curr,0) : 0;

/* function sumArray(array) {
	if (array == null) {
		return 0;
	} else if (array.length < 2) {
		return 0;
	} else {
		array = array.sort(function(a,b) {return a - b;});
		var total = 0;
		for (var i = 1; i < array.length - 1; i++) {
			total += array[i];
		}
		return total;
	}
} */


// Convert a string to an array
// Write a function to split a string and convert it into an array of words.
/* function stringToArray(string) {
	return string.split(' ');
} */

// const stringToArray = string => string.split(' ');


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// const quarterOf = (month) => Math.ceil(month / 3);

/* const quarterOf = (month) => {
	if (month <= 3) {
		return 1
	} else if (month <= 6) {
		return 2
	} else if (month <= 9) {
		return 3
	} else if (month <= 12) {
		return 4
	}
} */



// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
/* function greet(name) {
	return `Hello, ${name} how are you doing today?`;
} */

// const greet = name => `Hello, ${name} how are you doing today?`;

/* function greet(name) {
	return "Hello, " + name + " how are you doing today?";
} */


// A Needle in the Haystack
// 	Can you find the needle in the haystack ?
// 	Write a function findNeedle() that takes an array full of junk but containing one "needle"
// 	After your function finds the needle it should return a message(as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

/* Example(Input-- > Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"  */
/* function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf('needle')}`;
} */


// Calculate BMI
// Write function bmi that calculates body mass index(bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
/* function bmi(weight, height) {
	let b = weight / height ** 2;
	if (b <= 18.5) {
		return 'Underweight';
	}
	if (b <= 25) {
		return 'Normal';
	}
	if (b <= 30) {
		return 'Overweight';
	}
	return 'Obese';
} */

// const bmi = (w, h, b = w / h ** 2) =>
// b <= 18.5 ? 'Underweight' : b <= 25 ? 'Normal' : b <= 30 ? 'Overweight' : 'Obese';


// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

/* For example:
Given[34, 15, 88, 2] your solution will return 2
Given[34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */
// findSmallestInt = args => Math.min(...args);


// Opposite number
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// opposite = number => -number;

// const opposite = number => -number;

/* function opposite(number) {
	return (-number);
} */


// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
/* function maps(x){
	return x.map(n => n * 2);
} */

// maps = x => x.map(e => e * 2);

/* function maps(x) {
	//return x.map(el => el * 2);
	let arr = [];
	for (let i = 0; i < x.length; i++) {
		arr.push(x[i] * 2);
	}
	return arr;
} */


// Count by X
/* Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list(depending on language). */
// countBy = (x, n) => Array.from({length: n}, (_,index) => x + index * x);

/* function countBy(x, n) {
	var z = [];
	for (i = 1; i <= n; i++) {
			z.push(x * i);
	}
	return z;
} */


// Remove String Spaces
// Write a function that removes the spaces from the string, then return the resultant string.
// const noSpace = x => x.split(' ').join('');

// function noSpace(x){return x.split(' ').join('')};

/* function noSpace(x){
	return x.replace(/\s/g, '');
} */

/* function noSpace(x) {
	return x.replaceAll(' ', '');
} */


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
/* function smash(words) {
	return words.join(' ');
} */

// const smash = words => words.join(' ');


// Convert a String to a Number!
// We need a function that can transform a string into a number.What ways of achieving this do you know ?
// 	Note : Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
/* const stringToNumber = function(str) {
	// return str * 1;
	// return + str;
	// return Number(str);
	// return parseInt(str + 'fgsgsf');
} */


// Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
