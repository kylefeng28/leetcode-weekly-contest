/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	var prev;
	var curr;
	var currConsecutive = nums[0] === 1 ? 1 : 0;
	var consecList = nums[0] === 1 ? [] : [0];

	if (nums.length == 1) {
		return 1;
	}

	for (var i = 1; i < nums.length; i++) {
		prev = nums[i-1];
		curr = nums[i];
		// Consecutive
		if (curr == 1) {
			currConsecutive++;
		}
		else {
			consecList.push(currConsecutive);
			currConsecutive = 0;
		}
	}
	consecList.push(currConsecutive);

	console.log("Input:", nums);
	console.log("ConsecList:", consecList);

	if (consecList.length > 1) {
		var flipped = [];
		for (var i = 1; i < consecList.length; i++) {
			flipped.push(consecList[i-1] + consecList[i] + 1);
		}
		// Return max of flipped array
		return Math.max.apply(null, flipped);
	}
	else {
		return consecList[0];
	}
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 1, 1, 0, 1, 1])); console.log();
console.log(findMaxConsecutiveOnes([1,0,1,1,0])); console.log();
console.log(findMaxConsecutiveOnes([1,0,1,1,1,0])); console.log();
console.log(findMaxConsecutiveOnes([0, 1])); console.log();
console.log(findMaxConsecutiveOnes([1, 1])); console.log();
