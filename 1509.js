/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    len = nums.length;

    if (len <= 4) return 0;

    nums.sort((a, b) => a - b);

    return Math.min(
        nums[len - 1] - nums[3],
        nums[len - 2] - nums[2],
        nums[len - 3] - nums[1],
        nums[len - 4] - nums[0],
    );
};
