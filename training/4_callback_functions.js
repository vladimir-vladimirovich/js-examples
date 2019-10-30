let sum = (a, b) => a + b;
let devide = (a, b) => a / b;
let subtract = (a, b) => a - b;
let somethingAndMultiplyBy2 = (callback, a, b) => {
    let callbackResult = callback(a, b);
    return callbackResult * 2;
}

console.log(somethingAndMultiplyBy2(sum, 8, 4)); // 24
console.log(somethingAndMultiplyBy2(devide, 8, 4)); // 4
console.log(somethingAndMultiplyBy2(subtract, 8, 4)); // 8