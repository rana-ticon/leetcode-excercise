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

var decode = function (str) {
    let length = 0;
    let lengthStr = '';
    let element = '';
    let output = [];

    for (const char of str) {
        // If at the start of a new string
        if (length === 0) {
            if (char === '#') {
                length = parseInt(lengthStr);
                lengthStr = '';
            } else {
                // Read the length of the next string
                lengthStr += char;
            }
        }
        // If reading the characters of a string
        else {
            element += char;
            length--;

            // If end of the string
            if (length === 0) {
                output.push(element);
                element = '';
            }
        }
    }
    return output;
};

const input = ['lint', 'code', 'love', 'you'];
const encodedString = encode(input);
console.log(encodedString);
console.log(decode(encodedString));
