/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
	var n = nums.length;

	if (n == 0) { return false; }

	var passed = new Array(n).fill(0);

	var i = 0; ++passed[i];
	for (;;) {
		var i_old = i;
		var x = nums[i];
		i = (i + x + n) % n; // JS doesn't have real modulo

		if (i_old == i) {
			return false;
		}

		++passed[i];
		if (passed[i] > 1) {
			console.log(passed);
			return true;
		}
	}
};

console.log(circularArrayLoop([2, -1, 1, 2, 2]));
console.log(circularArrayLoop([-1, 2]));
