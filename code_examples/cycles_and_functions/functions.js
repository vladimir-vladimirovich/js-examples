// ==============================> Functions expression and function declaration <===============================
console.log(sum(2, 5)); // ERROR
console.log(SUM(2, 5));

// ==============================> Function expression <===============================
let sum = function (a, b) {
    return a + b
};
sum(2, 5);

// ==============================> Function declaration <===============================
function SUM(a, b) {
    return a + b
}

SUM(2, 5);

// ==============================> Arrow functions <===============================
// 1.1
let arrowSumOne = (a, b) => a + b;
arrowSumOne(3, 5);
// 1.2
let arrowSumTwo = (a, b) => {
    return a + b
};
arrowSumTwo(2, 3);
// 2.1
let showDateOne = () => new Date();
showDateOne();
// 2.2
let showDateTwo = () => {
    return new Date();
};
showDateTwo();
