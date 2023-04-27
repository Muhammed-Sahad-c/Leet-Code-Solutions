 

// CHALLANGE ===============================================
// do it without any loop/recursion in O(1) runtime

 

var addDigits = function (num) {

    // ========================= methood1 with o(n) complexity==========
    // if (num < 10) {
    //     return num;
    // } else {
    //     let stringNumber = num.toString().split('')
    //     let number = stringNumber.reduce((total, value) => {
    //         return Number(total) + Number(value)
    //     })
    //     return addDigits(number)
    // }
    // =================================================================

    //========================= method2 with o(1) complextiy============
    if (num < 10) return num;
    return num % 9 == 0 ? 0 : num % 9
    //==================================================================
};



addDigits(11)