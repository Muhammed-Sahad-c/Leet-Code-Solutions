/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {

    const findRequiredDays = (capacity) => {
        let numOfDays = 1;
        let loaded = 0;

        for (let weight of weights) {
            if (loaded + weight > capacity) {
                loaded = weight;
                numOfDays++;
            } else loaded += weight;
        }

        return numOfDays;
    };

    let left = Math.max(...weights);
    let right = weights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        const requiredDays = findRequiredDays(mid);

        if (requiredDays <= days) right = mid - 1;
        else left = mid + 1;
         
    }

    return left;

};
