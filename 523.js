/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {

    const mods = new Map();

    mods.set(0, -1);

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let mod = sum % k;

        if (mods.has(mod)) {
            if (i - mods.get(mod) >= 2) return true;
        } else mods.set(mod, i)

    }

    return false;
};
