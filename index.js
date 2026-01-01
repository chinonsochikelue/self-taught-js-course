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