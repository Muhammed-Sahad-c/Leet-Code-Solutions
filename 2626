/**
* @param {number[]} nums
* @param {Function} fn
* @param {number} init
* @return {number}
*/
var reduce = function (nums, fn, init) {
    let val = init;
    for (const i of nums) {
        val = fn(val, i);
    }
    return val;
};