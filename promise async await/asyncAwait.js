// ==============================> Arrow functions format <===============================
/**
 * Console log something after delay
 * @param time
 */
let delay = time => new Promise(resolve => {
    setTimeout(() => {
        console.log("time = " + time); // Wait "time" and do console.log
        resolve() // Call resolve() after console.log
    }, time);
});

let asyncCalls = async () => {
    await delay(2000); // wait 2000 and displayed 2000
    await delay(2005); // THEN wait 2005 and displayed 2005
    await delay(2010); // THEN wait 2010 and displayed 20010
};

asyncCalls();

// ==============================> Common "callback hell" format <===============================
let delayHell = function (time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("time = " + time);
            resolve()
        }, time);
    })
};

let asyncHellCalls = async function () {
    await delayHell(2000);
    await delayHell(2005);
    await delayHell(2010);
};

asyncHellCalls();