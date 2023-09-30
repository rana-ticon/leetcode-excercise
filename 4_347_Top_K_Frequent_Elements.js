/*
 * Title: Top K Frequent Elements
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Sat Sep 30 2023
 */

//Leetcode URL: https://leetcode.com/problems/top-k-frequent-elements/

/* 347. Top K Frequent elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

var topKFrequent = function (nums, k) {
	const map = new Map();
	let sorted = [];
	let output = [];
	for (let number of nums) {
		map.set(number, (map.get(number) || 0) + 1);
	}

	for (let [key, value] of map) {
		sorted[value] = Array.isArray(sorted[value]) ? [...sorted[value], key] : [key];
	}

	for (let index = sorted.length - 1; index > 0; index--) {
		if (sorted[index] !== undefined) {
			output = [...output, ...sorted[index]];
			if (output.length === k) break;
		}
	}

	return output;
};

const nums = [5, 3, 1, 1, 1, 3, 73, 1];
const k = 2;

console.log(topKFrequent(nums, k));
