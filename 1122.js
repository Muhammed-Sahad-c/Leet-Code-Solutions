// Relative Sort Array [2023 solution]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    var output = [];
    while (arr2.length) {
        var curr = arr2.shift();
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === curr) {
                output.push(arr1.splice(i, 1))
                i--;
            }
        }
    }

    return [...output, ...arr1.sort((a, b) => a - b)]
};



// Relative Sort Array [2024 solution]


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let sortedArr = [];

    for (let num of arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (num === arr1[i]) {
                let currNum = arr1.splice(i, 1);
                sortedArr.push(currNum[0]);
                i--;
            }
        }
    }

    return [...sortedArr, ...arr1.sort((a, b) => a - b)];
};
