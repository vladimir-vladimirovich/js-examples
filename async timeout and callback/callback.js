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