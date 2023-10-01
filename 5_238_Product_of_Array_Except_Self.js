/*
 * Title: Product of Array Except Self
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Sat OCT 01 2023
 */

//Leetcode URL: https://leetcode.com/problems/product-of-array-except-self/

/* 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

var productExceptSelf = function (nums) {
	const output = new Array(nums.length);
	let lastProduct = 1;
	for (let index = 0; index < nums.length; index++) {
		lastProduct = index === 0 ? lastProduct : nums[index - 1] * lastProduct;
		output[index] = lastProduct;
	}

	for (let index = nums.length - 1; index >= 0; index--) {
		lastProduct = index !== nums.length - 1 ? (lastProduct = nums[index + 1] * lastProduct) : 1;
		output[index] = output[index] * lastProduct;
	}

	return output;
};

const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
