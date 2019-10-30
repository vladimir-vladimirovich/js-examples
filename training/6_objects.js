// Create empty object --------------------
let object1 = new Object();
// or
let object2 = {};

// Create object with properties --------------------
let user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: '30'
}
// Display object properties 
console.log(user.firstName); // Ivan
console.log(user.lastName); // Ivanov
console.log(user.age); // 30
// Add/change object property
user.job = 'QA';
console.log(user.job) // QA
// Change property
user.job = 'FE developer'
console.log(user.job) // FE developer

// Property names --------------------
let age = 'age';
let human = {
    'first name': 'Ivan',
    'last name': 'Ivanov',
    [age]: '30'
}
console.log(human['first name']); // Ivan
console.log(human['last name']); // Ivan
console.log(human['age']); // 30
console.log(human.age); // 30

// 'for in' loop --------------------
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};

for (let property in codes) {
    console.log(property); // 1, 41, 44, 49
}

for (let property in codes) {
    console.log(`${property} : ${codes[property]}`);
}
// 1 : USA
// 41 : Switzerland
// 44 : Great Britain
// 49 : Germany