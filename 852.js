/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    if (arr.length === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

        if (arr[mid] > arr[mid - 1]) left = mid + 1;
        else right = mid - 1;
    }
};
