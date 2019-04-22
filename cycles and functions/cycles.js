// ==============================> FOR cycle <===============================
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Step = " + step);
}

// ==============================> WHILE cycle <===============================
let array = ["1", "2", "3", "4", "5", "6", "7"];
let i = 0;
while (array[i]) {
    console.log(array[i]);
    i++;
}

// ==============================> Switch cycle <===============================
new Date().getDay();
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

