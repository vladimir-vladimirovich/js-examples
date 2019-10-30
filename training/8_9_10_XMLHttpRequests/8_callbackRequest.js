/**
 * Send simple request to version.json and display response in console
 * @param url
 * @param callbackFunction
 */
let httpRequest = (url, callbackFunction) => {
    // Create new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Set request type "GET" and link https://portal-admi...
    // Request isn't sent yet!
    xhr.open("GET", url, true);

    // Actions to be done upon valid response
    xhr.onload = function () {
        // Show response in console
        // console.log(xhr.responseText);

        // Do callback function
        // And show result in console
        console.log(callbackFunction(xhr.responseText));
    };

    // Send request
    xhr.send();
};

// 1. Send request
// 2. Parse response so it will be an object 
// 3. Add new property to result object 
httpRequest('https://reqres.in/api/users?page=2', (response) => {
    response = JSON.parse(response);
    response.newProperty = 'this is new property';
    console.log(response);
})