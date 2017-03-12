/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var prev;
    var curr;
    var maxConsecutive = 0;
    var currConsecutive = 1;
    for (var i = 1; i < nums.length; i++) {
        prev = nums[i-1];
        curr = nums[i];
        // Consecutive
        if (prev == 1 && curr == 1) {
            currConsecutive++;
            if (currConsecutive > maxConsecutive) {
                maxConsecutive = currConsecutive;
            }
        }
        else {
            currConsecutive = 1;
        }
    }
    return maxConsecutive;
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 1, 1, 0, 1, 1]));
