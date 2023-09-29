//s = "anagram", t = "nagaram"
//s = "rat", t = "car"

var isAnagram = function (s, t) {
	//Complexity nlogn, coming from sorting
	//return [...s].sort().join('') === [...t].sort().join('');
	if (s.length !== t.length) {
		return false;
	}
	//Trying to improve the time complexity to 0(n) but space complexity is also O(n)
	// const stringMap = new Map();
	// for (let index = 0; index < s.length; index++) {
	// 	if (stringMap.get(s[index]) !== undefined) {
	// 		stringMap.set(s[index], stringMap.get(s[index]) + 1);
	// 	} else {
	// 		stringMap.set(s[index], 1);
	// 	}
	// }

	// for (let index = 0; index < t.length; index++) {
	// 	if (stringMap.get(t[index]) === undefined || stringMap.get(t[index]) <= 0) return false;
	// 	else {
	// 		stringMap.set(t[index], stringMap.get(t[index]) - 1);
	// 	}

	// 	//Here deleting the map key whose value is already 0, so we don't have to iterate the whole map again
	// 	if (stringMap.get(t[index]) === 0) {
	// 		stringMap.delete(t[index]);
	// 	}
	// }

	// return stringMap.size === 0;

	//We can solve it using array also, the complexity is still 0(n) but because of array the execution will be faster
	const charCount = new Array(26).fill(0);
	for (let index = 0; index < s.length; index++) {
		charCount[s.charCodeAt(index) - 'a'.charCodeAt(0)]++;
		charCount[t.charCodeAt(index) - 'a'.charCodeAt(0)]--;
	}

	for (let index = 0; index < charCount.length; index++) {
		if (charCount[index] !== 0) return false;
	}
	return true;
};

console.log(isAnagram('car', 'rac'));
