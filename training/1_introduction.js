// ---------- VARIABLES ----------
let a = 1;
var A = 2;
const aA = '21';

// ---------- DATA TYPES ----------
// Number
let number = 8;
// String
let str = 'Hello wordl!';
// Boolean
let boolean = true;
// Object
let defaultObject = {
    objectProperty: 'objectValue'
};
// null
let n = null;
// undefined
let u = undefined;
// Array
let arr = [1, 'String', boolean, defaultObject, n, u];

// ---------- OPERATORS ----------
// +
let str1 = 'str1';
let str2 = 'str2';
console.log(str1 + str2) // str1str2

let n1 = 1;
let n2 = 3;
let sum = 1 + 3; // 4

console.log(str1 + sum); // str1str24
// ++
let x = 1;
let prefix = ++x;
console.log(x); // 2
console.log(prefix); // 2

let y = 1;
let postfix = y++;
console.log(y); // 2
console.log(postfix); // 1
// %
let b = 10 % 4; // 2

// ---------- Comparisons ----------
// ==
let com1 = 1;
let com2 = '1';
console.log(com1 == com2); // true

// ===
console.log(com1 === com2); // true

// ---------- Conditional operators ----------
// if
let arg1 = 1;
let arg2 = '1';
if (arg1 == arg2) {
    console.log('TRUE');
} else console.log('FALSE'); // TRUE

if (arg1 == arg2) {
    console.log('TRUE');
} else {
    console.log('FALSE');
} // TRUE

// 'if then else'
arg1 == arg2 ? true : false; // true
arg1 === arg2 ? true : false; // false

// ---------- typeof ----------
let typeNumber = 1;
let typeString = 'String';
let typeArray = [];
let typeUndefined = undefined;
let typeObject = {};

console.log(typeof typeNumber);
console.log(typeof typeString);
console.log(typeof typeArray);
console.log(typeof typeUndefined);
console.log(typeof typeObject);

// number
// string
// object
// undefined
// object