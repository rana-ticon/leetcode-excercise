/*
 * Title: Two Sum
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Sat Sep 30 2023
 */

//Problem URL: https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, target) {
	//Brute-Force using 0(n^2)
	// for (let index = 0; index < nums.length; index++) {
	// 	const remains = target - nums[index];
	// 	//Let's check the position of the remains
	// 	for (let secondaryIndex = index + 1; secondaryIndex < nums.length; secondaryIndex++) {
	// 		if (nums[secondaryIndex] === remains) return [index, secondaryIndex];
	// 	}
	// }

	//Let's optimize the solution and turn it into 0(n)
	const numMap = new Map();
	for (let index = 0; index < nums.length; index++) {
		const remains = target - nums[index];

		if (numMap.has(remains) && numMap.get(remains) !== index) {
			return [numMap.get(remains), index];
		}

		numMap.set(nums[index], index);
	}
};

//Because this one gave me most pain
const nums = [3, 3];
const target = 6;

// Lesson learned in here, duplicate key will not work in JS Map

console.log(twoSum(nums, target));
