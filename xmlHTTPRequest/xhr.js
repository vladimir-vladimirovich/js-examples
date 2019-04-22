// Send simple request to version.json and display it in console
let simpleRequest = (URL) => {
    // Create new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Set request type "GET" and link https://portal-admi...
    // Request isn't sent yet!
    xhr.open("GET", URL, true);

    // Actions to be done upon valid response
    xhr.onload = function () {
        // Show response in console
        console.log(xhr.responseText);
    };

    // Send request
    xhr.send();
};

simpleRequest("https://portal-admin-test.onetogo.co/buzz-theme/version.json");