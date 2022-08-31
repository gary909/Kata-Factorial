function factorial(n) {
    let myNum = 1;
    if (n < 0 || n > 11) {
        throw new RangeError();
    } else {
        for (var i = n; i >= 1; i--) {
            myNum = myNum * i;
        }
    }
    return myNum;
}

console.log(factorial(0)); // "factorial for 0 is 1"
console.log(factorial(1)); // "factorial for 1 is 1"
console.log(factorial(2)); // "factorial for 2 is 2"
console.log(factorial(3)); // "factorial for 3 is 6"
console.log(factorial(5)); // "factorial for 5 is 120"