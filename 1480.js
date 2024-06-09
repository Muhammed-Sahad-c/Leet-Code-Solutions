/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sums = [];

    for (let num of nums) {
        sums.push((sums[sums.length - 1] || 0) + num);
    }

    return sums;
};
