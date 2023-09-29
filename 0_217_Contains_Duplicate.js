//[1,1,1,3,3,4,3,2,4,2] - input

var containsDuplicate = function (nums) {
	if (nums.size == 0) {
		return false;
	}

	//Brute force with 0(n^2)
	// for (let index = 0; index < nums.length - 1; index++) {
	// 	for (let secondaryIndex = index + 1; secondaryIndex < nums.length; secondaryIndex++) {
	// 		if (nums[index] === nums[secondaryIndex]) return false;
	// 	}
	// }
	const numberSet = new Set();

	for (const number of nums) {
		if (numberSet.has(number)) {
			return true;
		}
		numberSet.add(number);
	}
	return false;
};
const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(input));
