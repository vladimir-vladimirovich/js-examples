// ==============================> Promises - Resolve <===============================
/**
 * Call timeout callback after delay
 * @param time
 */
let delay = function (time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(); // Call resolve after 'time'
        }, time)
    })
};

delay(3000) // Call delay() function
    .then(function () {
        console.log("Hello, it's me...") // After 3000ms do console.log()
    });

// ==============================> Promises - Resolve(arrow functions format) <===============================
let delayArrow = time => new Promise(resolve => setTimeout(resolve, time));

delayArrow(3000)
    .then(() => console.log("Hello, it's me...")); // Hello, it's me... after 3 seconds in console

// ==============================> Promises - Reject <===============================
let delayPromise = delay => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (delay === 2000) {
            resolve("Yeee, 2000ms !!11!")
        } else reject("Poker face, who cares about 2000ms. Delay = " + delay)
    }, delay)
});

delayPromise(2001) // Delay != 2000 hence reject() was called
    .then(result => console.log(result))
    .then(() => console.log("Catch?"))
    .then(() => delayPromise(2002))
    .catch(error => console.log(error)); // Catch 2001 error