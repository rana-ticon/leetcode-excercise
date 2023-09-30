/*
 * Title: Group Anagrams
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Sat Sep 30 2023
 */

//LeetCode: https://leetcode.com/problems/group-anagrams/

/* Question Statement
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

var groupAnagrams = function (strs) {
	if (strs.length < 2) {
		return [strs];
	}

	let map = new Map();
	for (let str of strs) {
		let charCode = new Array(26).fill(0);
		for (let index = 0; index < str.length; index++) {
			charCode[str.charCodeAt(index) - 'a'.charCodeAt(0)]++;
		}
		const strinKey = charCode.join(':');
		if (map.has(strinKey)) {
			map.set(strinKey, [...map.get(strinKey), str]);
		} else {
			map.set(strinKey, [str]);
		}
	}

	return [...map.values()];
};

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(input));
