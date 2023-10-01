/*
 * Title: Encode and Decode Strings
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Mon Oct 02 2023
 */

//Leetcode premium so lintcode URL: https://www.lintcode.com/problem/659/

/*
659 · Encode and Decode Strings

Description
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode

Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"

Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"
*/

var encode = function (strs) {
	let output = '';
	for (let str of strs) {
		output += `${str.length}#${str}`;
	}
	return output;
};

var decode = function (str) {};

const input = ['we', 'say', ':', 'yes'];
const decodeInput = '2#we3#say1#:3#yes';
console.log(encode(input));
console.log(decode(decodeInput));
