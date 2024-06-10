/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {

    const sums = new Map();
    sums.set(0, 1);

    let sum = 0;
    let subArrys = 0;

    for (let num of nums) {
        sum += num;

        let currRem = sum % k;

        if (currRem < 0) {
            currRem += k;
        }

        if (sums.has(currRem)) {
            subArrys += sums.get(currRem);
        }

        sums.set(currRem, (sums.get(currRem) || 0) + 1);
    }


    return subArrys;
};
