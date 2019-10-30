// Send simple request to version.json and display it in console
let simpleRequest = URL => {
    return new Promise((resolve, reject) => {
        // Create new XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // Set request type "GET" and link https://portal-admi...
        // Request isn't sent yet!
        xhr.open("GET", URL, true);

        // Actions to be done upon valid response
        xhr.onload = () => {
            resolve(xhr.responseText);
        };

        xhr.onerror = () => {
            reject("Something went wrong...")
        };

        // Send request
        xhr.send();
    });
};

/**
 * Parse JSON into object
 * @param json
 */
let parseJSON = json => {
    return new Promise(resolve => {
        let versionJSON = JSON.parse(json);
        // Remove unnecessary properties
        delete versionJSON.WPL_Git_Log;
        delete versionJSON.commits;
        resolve(versionJSON);
    });
};

// In order to avoid prohibited cross domain requests call function below in domain with version.json
// In this case: https://portal-admin-test.onetogo.co
simpleRequest("https://portal-admin-test.onetogo.co/buzz-theme/version.json")
    .then(response => { // "response" here is what was called in resolve() in simpleRequest method. In this case resolve(xhr.responseText)
        console.log("[ORIGINAL RESPONSE] below:");
        console.log(response);
        return parseJSON(response); // Returns promise because parseJSON function returns promise
    })
    .then(parseResult => { // "parseResult" here is what was called in resolve() in parseJSON method. In this case resolve(versionJSON)
        console.log("[JSON Object] below:");
        console.log(parseResult);
    })
    .catch(error => console.log(error)); // Invoke wrong URL to get catch. For example: "https://portal-ad/asd.json"