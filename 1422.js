/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {

    const findCount = (arr = [], target) => {

        let count = 0;

        for (let num of arr) {
            if (num == target) {
                count++;
            }
        }

        return count;
    }

    const arr = s.split("");
    let maxScore = 0;

    for (let i = 1; i < arr.length; i++) {

        const leftArr = arr.slice(0, i);
        const rightArr = arr.slice(i);

        const leftCount = findCount(leftArr, 0);
        const rightCount = findCount(rightArr, 1)

        const totalCount = leftCount + rightCount;

        if (maxScore < totalCount) {
            maxScore = totalCount;
        }
    }

    return maxScore
};
