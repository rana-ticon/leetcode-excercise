/*
 * Title: Longest Consecutive Sequence
 * Author: Bokhtiar Rahman
 * Email: lyfizbzy@gmail.com
 * Created on Mon Oct 11 2023
 */

//Leetcode URL: https://leetcode.com/problems/longest-consecutive-sequence/

/*
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 
Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length;
    const numSet = new Set(nums);
    let seqNumber = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            seqNumber = seqNumber > length ? seqNumber : length;
        }
    }
    return seqNumber;
};

const input = [-8, -4, 9, 9, 4, 6, 1, -4, -1, 6, 8];
console.log(longestConsecutive(input));
