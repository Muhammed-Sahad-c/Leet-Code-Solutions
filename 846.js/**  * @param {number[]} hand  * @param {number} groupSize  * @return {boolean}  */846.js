/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {

    if (hand.length % groupSize !== 0) return false;

    const freqs = new Map();

    for (let card of hand) {
        freqs.set(card, (freqs.get(card) || 0) + 1);
    }

    hand.sort((a, b) => a - b);

    for (let card of hand) {
        let freq = freqs.get(card);

        if (freq > 0) {
            for (let i = 0; i < groupSize; i++) {
                let cardCount = freqs.get(card + i);
                if (cardCount <= 0 || cardCount === undefined) return false;
                freqs.set(card + i, cardCount - 1);
            }
        }
    }

    return true;
};
