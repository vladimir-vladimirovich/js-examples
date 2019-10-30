// Returns 1st element with such selector
document.querySelector('[name="btnK"]');

// Returns ALL elements with such selector
document.querySelectorAll('[name="btnK"]');

/**
 * Wait for element method example
 * @param selector
 * @param delay
 */
let waitForElement = (selector, delay) => {
    if (!delay) {
        delay = 15000;
    }
    return new Promise(function (resolve) {
        let endTime = new Date().getTime() + delay;
        let interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                resolve(document.querySelector(selector));
            } else if (new Date().getTime() > endTime) {
                clearInterval(interval);
                resolve(null);
            }
        }, 1000)
    })
};

// Search example for https://www.google.com/
waitForElement('[name="btnK"]', 5000)
    .then(result => console.log(result));