// Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
// If there are no elements in the array, it should return -1.

Array.prototype.last = function () {
    // method 1
    return this.length !== 0 ? this[this.length - 1] : -1;
    //method 2
    // var lastPosition = arr[0] !== 0 ? arr.length - 1 : false;
    // return lastPosition ? arr[lastPosition] : -1;
};

const arr = [1, 2, 3];

console.log(arr.last())

