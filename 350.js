// 👉🏻 SOLUTION USING TWO POINTERS

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


// 👉🏻 SOLUTION USING HASH MAP

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    const freqs = new Map();
    const output = [];

    for (let num of nums1) {
        freqs.set(num, (freqs.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (freqs.get(num) > 0) {
            output.push(num);
            freqs.set(num, (freqs.get(num) || 0) - 1);
        }
    }

    return output;
};


// 👉🏻 IF THE ARRAY IS SORTED HOW WE CAN OPTIMIZE THE ALOGRITHM ?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    let output = [];

    findIndex = (target) => {

        let left = 0;
        let right = nums1.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums1[mid] === target) return mid;

            target < nums1[mid] ? (right = mid - 1) : (left = mid + 1);
        }

        return -1;
    };


    for (let num of nums2) {
        let targetIndex = findIndex(num);

        if (targetIndex >= 0) {
            nums1[targetIndex] = -1;
            output.push(num);
        }
    }


    return output;

};

