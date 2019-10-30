// Send simple request to version.json and display it in console
let httpRequest = url => {
    // Create new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // Set request type "GET" and link https://portal-admi...
    // Request isn't sent yet!
    xhr.open("GET", url, true);

    // Actions to be done upon valid response
    xhr.onload = function () {
        // Show response in console
        console.log(xhr.responseText);
    };

    // Send request
    xhr.send();
};

httpRequest('https://reqres.in/api/users?page=2');