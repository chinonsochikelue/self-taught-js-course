// // FUNCTIONS WITH PARAMETERS & RETURN
// // 🎯 Goal

// // Teach your brain to write reusable logic instead of hard-coding values.

// // Write a function that:

// // Accepts two numbers

// // Returns:

// // The larger number

// // If both numbers are equal, return "Same"

// const compareNumbers = (a, b) => {
//     if (a > b) {
//         return a
//     } else if (b > a) {
//         return b
//     } else {
//         return "Same"
//     }
// }




// // LOOPS (Pattern Thinking)
// // 🎯 Goal

// // Teach your brain to repeat logic without repeating code.

// // CHALLENGE

// // Write a program that:

// // Loops from 1 to 50

// // Prints:

// // "Code" for multiples of 3

// // "Logic" for multiples of 5

// // "CodeLogic" for multiples of both

// // The number itself otherwise

// // 📌 Rules

// // Use a for loop

// // Use if / else if / else

// // No arrays

// // No shortcuts




// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("CodeLogic")
//     } else if (i % 3 === 0) {
//         console.log("Code")
//     } else if (i % 5 === 0) {
//         console.log("Logic")
//     } else {
//         console.log(i);
//     }
// }


// // ARRAYS (Working With Collections)
// // 🎯 Goal

// // Learn how to process many values using logic you already know.

// // CHALLENGE

// // Given an array of numbers:

// // const numbers = [4, 10, 7, 25, 3, 18];


// // Write code that:

// // Calculates the total

// // Calculates the average

// // Finds the largest number
// let sym1 = Symbol("javascript is fun"); 
// let sym2 = Symbol("javascript is fun"); 
// console.log("This two strings are the same: ", sym1 === sym2);

// let myName = "Chinonso Chikelue";
// let myAge = 20;
// let canCodeJavascript = true;

// console.log("Hello, My name is " + myName + ", " + "I am " + myAge + " " + "years old and I can code Javascript: " + canCodeJavascript);

// let a = Number(prompt("What\'s a?: " ));
// let b = Number(prompt("What\'s b?: " ));

//  if (a <= 0 || b <= 0) {
//     alert("Please enter positive numbers only");
//  } else if (isNaN(a) || isNaN(b)) {
//     alert ("Invalid input. Please enter numeric values only.");
//  }

// let total = a ** 2 + b ** 2;

// let c = total ** 0.5;

// alert("The value of c is: " + c);


// Arrays & Objects (Working With Complex Data)
// 🎯 Goal: Arrays in an object
{/*
let friend1 = {
    firstName: "John1",
    lastName: "Paul1",
    id: 1
};

let friend2 = {
    firstName: "John2",
    lastName: "Paul2",
    id: 2
};

let friend3 = {
    firstName: "John3",
    lastName: "Paul3",
    id: 3
};

let people = {
    friends: [
        friend1,
        friend2,
        friend3
    ],
};

console.log(people); 
*/}

// Manipulating an array

{/*
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
theList.shift();
theList.unshift('FIRST');
theList.splice(2, 5, 'MIDDLE', 'Hello World');
theList.pop();
theList.push('LAST');
console.log(theList);*/}

// Company product catalog

// let laptops = {
//     name: "Laptop",
//     model: "XPS 13",
//     cost: 999.99,
//     quantity: 10,
// };
// let smartPhone = {
//     name: "Smartphone",
//     model: "Galaxy S21",
//     cost: 799.99,
//     quantity: 25,
// };
// let tablet = {
//     name: "Tablet",
//     model: "iPad Pro",
//     cost: 899.99,
//     quantity: 15,
// };

// let products = [
// ];

// products.push(laptops, smartPhone, tablet);

// console.log(products);

// console.log(tablet.quantity)





// Logic Statements
// 🎯 Goal: Understanding logic statements

// let age = parseInt(prompt("Please enter your age: "));
// let cost = 0;
// let message = "";
// if (age < 3) {
//     cost = 0;
//     message = "Access is free!";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = `Access is ${cost} dollars!`;
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = `Access is ${cost} dollars!`;
// } else if (age >= 65) {
//     cost = 7;
//     message = `Access is ${cost} dollars!`;
// };

// console.log(message);
// console.log(`The cost for your age ${age} is ${cost} dollars.`);







// Conditional ternary operators
// let ID = 123;

// let message = ID === 123 ? "Welcome, User 123!" : "Access Denied.";

// console.log(message);






// Switch statements
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.


let randomNum = Math.floor(Math.random() * 6);
let userQuestion = prompt("Ask me anything: ");
let response = "";

switch((randomNum)) {
    case 0:
        response = "Hello there!";
        break;
    case 1:
        response = "Hey there!";
        break;
    case 2:
        response = "Hi there!";
        break;
    case 3:
        response = "Congratulations! You guessed it right!";
        break;
    case 4:
        response = "Hey! That's close.";
        break;
    case 5:
        response = "Too low! Try again.";
        break;
    };

console.log(`Your question: ${userQuestion}`);
console.log(`Answer: ${response}`);