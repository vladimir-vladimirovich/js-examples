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

// 1. Send request
// 2. Parse response so it will be an object 
// 3. Add new property to result object 
httpRequest('https://reqres.in/api/users?page=2')
    .then(response => {
        response = JSON.parse(response);
        return response;
    })
    .then(resultObject => {
        resultObject.newProperty = 'this is new property';
        console.log(resultObject);
    });

// 1. Send request to invalid domain 
// 2. Catch error 
httpRequest('https://reqresOLOLOLOLO.in/api/users?page=2')
    .then(response => {
        response = JSON.parse(response);
        return response;
    })
    .then(resultObject => {
        resultObject.newProperty = 'this is new property';
        console.log(resultObject);
    })
    .catch(error => console.log(error));
    // GET https://reqresololololo.in/api/users?page=2 502 (notresolvable)