// =========================== Example 1 ===========================
console.log("BEFORE");

setTimeout(function () {
    console.log(">>>setTimeout");
}, 2000);

console.log("AFTER");
// BEFORE
// AFTER
// >>>setTimeout

// =========================== Example 2 ===========================
console.log("BEFORE");

setTimeout(function () {
    console.log("setTimeout 1");
}, 2000);

console.log("BETWEEN");

setTimeout(function () {
    console.log("setTimeout 2");
}, 1999);

console.log("AFTER");
// BEFORE
// BETWEEN
// AFTER
// setTimeout 2
// setTimeout 1

// =========================== Example 3 ===========================
console.log("BEFORE");

setTimeout(function () {
    console.log("setTimeout 1");
    setTimeout(function () {
        console.log("setTimeout 2");
    }, 2000);
}, 2000);

console.log("AFTER");
// BEFORE
// AFTER
// setTimeout 1     // after 2000ms
// setTimeout 2     // after 4000ms