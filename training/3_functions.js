// -------------------- FUNCTIONS --------------------
// -------------------- FUNCTION DECLARATION --------------------
function funcDeclaration() {
    console.log('Function declaration format');
}

funcDeclaration(); // Call function 
// Function declaration format

funcDeclaration; // Will display the function
// ƒ funcDeclaration() {
// 	console.log('Function declaration format');
// }

// -------------------- FUNCTIONS W/ ARGUMENTS --------------------
function funcWithArgs(firstname, lastname) { //firstname and lastname - are function arguments
    return firstname + ' ' + lastname;
}
let name = 'Ivan';
let surname = 'Ivanov';
console.log(funcWithArgs(name, surname));
// "Ivan Ivanov"

let fullName = funcWithArgs(name, surname);
console.log(fullName);
// "Ivan Ivanov"

// -------------------- FUNCTIONS W/ OPTIONAL ARGUMENTS --------------------
function funcWithOptiona1(firstname, message) {
    if (message) { // simplified formating
        return firstname + ' is saying: ' + message;
    }
    return firstname + ' said nothing';
}
console.log(funcWithOptional('Ivan'));
// Ivan said nothing
console.log(funcWithOptional('Ivan', 'hello world'));
// Ivan is saying: hello world

function funcWithOptional2(firstname, message) {
    if (message === undefined) { // more complicated format 
        return firstname + ' is saying: ' + message;
    }
    return firstname + ' said nothing';
}

// -------------------- FUNCTION EXPRESSION --------------------
let funcExpression = function () {
    console.log('I\'m function expression');
}
funcExpression();
// I'm function expression

// -------------------- FUNCTION DECLARATION vs EXPRESSION --------------------
sumDeclaration(3, 6);
// 9
function sumDeclaration(a, b) { // function declaration
    return a + b;
}

sumExpression(3, 4);
// ERROR: Cannot access 'SUM' before initialization
let sumExpression = function (a, b) { // function expression
    return a + b;
}

    // ---------- ANONYMOUS FUNCTION(function w/o name) ----------
    (function () {
        console.log('Hello I\`m anonymous function');
    })() // Create function and call it immediately ('your function here')()
// Hello I`m anonymous function

// -------------------- ARROW FUNCTIONS --------------------
// 0.General overview
// let functionName = (arg1, arg2, ...argN) => {
//     expression;
// }

// 1. 
let sumArrowLong = (a, b) => {
    return a + b;
}
console.log(sumArrowLong(6, 12));
// 18

// 2. Shorter format of sumArrow() function above
// Return may be skipped in case of only one string in expression area
let sumArrowShort = (a, b) => a + b;
console.log(sumArrowShort(4, 5));
// 9

// 3. Arrow function with only one argument can be written w/o '()'
let oneArgFunc = arg => console.log(arg);
oneArgFunc('Something');
// Something

// 4. '{}' is required if expression is more than one string
let mathOperations = (a, b) => {
    console.log('a + b = ' + (a + b));
    console.log('a * b = ' + (a * b));
}
mathOperations(2, 3);
// 5
// 6