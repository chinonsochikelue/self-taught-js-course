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
// Q1

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

switch ((randomNum)) {
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

// Q2

// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string

let prize = parseInt(prompt("Select a number from 0 - 10: "));

let message = "";

switch (prize) {
    case 0:
    case 1:
    case 2:
        message = "You won a Toy Car!";
        break;
    case 3:
    case 4:
    case 5:
        message = "You won a Board Game!";
        break;
    case 6:
    case 7:
    case 8:
        message = "You won a Bicycle!";
        break;
    case 9:
    case 10:
        message = "You won a Laptop!";
        break;
    default:
        message = "Invalid selection. Please choose a number between 0 and 10.";
};

console.log("My Selection: ", message);


// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

const choices = ["Rock", "Paper", "Scissors"];

let randomNumForUser = Math.floor(Math.random() * 3);
let userChoice = choices[randomNumForUser];

let randomNumForComputer = Math.floor(Math.random() * 3);
let computerChoice = choices[randomNumForComputer];

let responseMessage = "";

if (userChoice === computerChoice) {
    responseMessage = "It\'s a tie!";
} else if (
    userChoice === "Rock" && computerChoice === "Scissors" ||
    userChoice === "Paper" && computerChoice === "Rock" ||
    userChoice === "Scissors" && computerChoice === "Paper"
) {
    responseMessage = "You win!";
} else {
    responseMessage = "Computer win!";
}


console.log("User Selection: ", userChoice);
console.log("Computer Selection: ", computerChoice);
console.log(responseMessage);