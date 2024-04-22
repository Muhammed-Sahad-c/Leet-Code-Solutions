/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];

    for (let num of nums1) {
        for (let i = 0; i < nums2.length; i++) {
            if (nums2[i] === num) {
                result.push(num);
                nums2[i] = -1;
                break;
            }
        }
    }

    return result;
};