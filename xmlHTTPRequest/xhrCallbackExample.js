/**
 * Send simple request to version.json and display response in console
 * @param URL
 * @param callbackFunction
 */
let simpleRequest = (URL, callbackFunction) => {
    // Create new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Set request type "GET" and link https://portal-admi...
    // Request isn't sent yet!
    xhr.open("GET", URL, true);

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

/**
 * Parse JSON into object
 * @param json
 */
let parseJSON = json => {
    let versionJSON = JSON.parse(json);
    // Remove unnecessary properties
    delete versionJSON.WPL_Git_Log;
    delete versionJSON.commits;
    // Return result
    return versionJSON;
};

simpleRequest("https://portal-admin-test.onetogo.co/buzz-theme/version.json", parseJSON);
