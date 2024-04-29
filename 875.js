/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    const canEatAll = (hour) => {
        totalHour = 0;

        for (let pile of piles) {
            totalHour += Math.ceil(pile / hour);
            if(totalHour > h) return false;
        }

        return true;
    }

    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canEatAll(mid)) {
            minTime = mid;
            right = mid - 1;
        }
        else left = mid + 1;

    };

    return left;

};
