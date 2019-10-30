// Send simple request to version.json and display it in console
let httpRequest = url => {
    return new Promise((resolve, reject) => {
        // Create new XMLHttpRequest
        let xhr = new XMLHttpRequest();

        // Set request type "GET" and link https://portal-admi...
        // Request isn't sent yet!
        xhr.open("GET", url, true);

        // Actions to be done on valid response
        xhr.onload = () => {
            xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
        };

        // Actions to be done on invalid response
        xhr.onerror = () => {
            reject(xhr.response)
        };

        // Send request
        xhr.send();
    });
};
// ==================================================================================
// 1. Send request
// 2. Parse response so it will be an object 
// 3. Add new property to result object 
let asyncCall = async url => {
    let response = await httpRequest(url);
    response = JSON.parse(response);
    response.newProperty = 'this is new property';
    console.log(response);
}

// ==================================================================================
asyncCall('https://reqres.in/api/users?page=2');

// ==================================================================================
// 1. Send request to invalid domain 
// 2. Catch error 
try {
    asyncCall('https://reqresOLOLOLOLO.in/api/users?page=2');
} catch (error) {
    console.log(error);
    // GET https://reqresololololo.in/api/users?page=2 502 (notresolvable)
}

// ==================================================================================
// Example of using await 'here and now'
(async () => {
    let response = await httpRequest('https://reqres.in/api/users?page=2');
    response = JSON.parse(response);
    response.newProperty = 'this is new property';
    console.log(response);
})();