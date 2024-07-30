// Control Flow Structures

// 1. Conditional Statements

// Conditionals: if , else if, else
// () - condition block
// {} - code block
// Usage: Solve complex conditions

let temperature = 25;
if (temperature < 0){
    // range is below zero (0)
    console.log("It's freezing!")
}
else if (temperature > 0  && temperature < 20){
    // range is between 20 and 0, but 20 and 0 is not included
    console.log("It's cool!")
}
else if (temperature >= 20 && temperature < 30){
    // range is between 20 and 30, but 30 is not included
    console.log("Damn!")
}
else {
    // if no above conditions are satisfied
    console.log("WTF u on bruh?!")
}

// Conditionals: switch-case statements
// Usage: Checking for exact values

let day = "Friday";
switch(day){
    case "Monday":
        console.log("It is the start of the week.")
        break;
    case "Friday":
        console.log("TGIF!")
        break;
    default:
        // default value will only run if the previous conditions are not met.
        console.log("Regular day, huh...")
}

// 2. Looping Statements

//  Loops: for loop
//  1st argument: variable initialization
//  2nd argument: condition expression (loop will continue or terminate)
//  3rd argument: increment/decrement

for(let i=1; i<=3; i++){
    console.log("For loop count:", i)
}

// Loops: while
let counter = 1
while(counter<=3){
    counter++;
    console.log("While loop count:", counter)
}

// Loops: do-while
let count = 7
do {
    console.log("Do-while loop count:", count);
    count++;
} while (count<=3);