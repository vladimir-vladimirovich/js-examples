// ==============================> Simple callback <===============================
let doSomethingAfterTimeOut = function (callback) {
    setTimeout(function () {
        callback(); // Do callback after 2000ms
    }, 2000)
};

doSomethingAfterTimeOut(function () {
    // Callback function below
    console.log("Woohoo! yep, we`ve made it") // Will be displayed after 2000ms
});

// ==============================> Simple callback <===============================
let doSomethingAfterTimeoutTwo = function (callback) {
    setTimeout(function () {
        console.log("Timeout");
        callback();
    }, 2000)
};

let show = function () {
    console.log("AFTER");
};

doSomethingAfterTimeoutTwo(show);

// ==============================> Simple callback <===============================
let sum = function (a, b, callback) {
    callback(a + b);
};

let display = function (something) {
    console.log(something);
};

sum(4, 7, display);