// ---------- LOOPS ----------
// ---------- WHILE loop----------
let i = 5;
while (i > 0) {
    console.log('i = ' + i);
    i--;
}
// i = 5
// i = 4
// i = 3
// i = 2
// i = 1

let arr = [1, 2, 3, 4, 5, 6, 7];
let y = 0;
while (y < arr.length) {
    console.log(`arr[${y}] = ` + arr[y]);
    y++;
}
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = 4
// arr[4] = 5
// arr[5] = 6
// arr[6] = 7

// ---------- DO WHILE loop ----------
let z = 0;
do {
    console.log('action!');
} while (z != 0)
// action!

while (z != 0) {
    console.log('action!');
}
// 

// ---------- FOR loop ----------
for (let step = 0; step < 5; step++) {
    console.log("Step = " + step);
}
// Step = 0
// Step = 1
// Step = 2
// Step = 3
// Step = 4

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue // Skip following code 
    }
    console.log('this string is displayed only for odd numbers. i = ' + i);
}
// this string is displayed only for odd numbers. i = 1
// this string is displayed only for odd numbers. i = 3
// this string is displayed only for odd numbers. i = 5
// this string is displayed only for odd numbers. i = 7
// this string is displayed only for odd numbers. i = 9

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; // Break out of loop
    }
    console.log('i = ' + i);
}
// i = 0
// i = 1
// i = 2

// ---------- Display all array elements ----------
let arrayToDisplay = [1,2,3,4,5,6,7,8];

// Display all elements from the beggining 
for (let i = 0; i < arrayToDisplay.length; i++) {
	console.log(arrayToDisplay[i]);
}

// Display all elements backwards 
for (let i = arrayToDisplay.length - 1; i >= 0; i--) {
	console.log(arrayToDisplay[i]);
}
