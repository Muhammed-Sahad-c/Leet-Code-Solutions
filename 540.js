/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            if (nums[i] !== nums[i + 1]) return nums[i];
        } else if (i == nums.length - 1) {
            if (nums[i] !== nums[i - 1]) return nums[i]
        } else {
            if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) return nums[i];
        }
    }

    
};
