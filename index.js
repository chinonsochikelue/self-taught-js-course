// FUNCTIONS WITH PARAMETERS & RETURN
// 🎯 Goal

// Teach your brain to write reusable logic instead of hard-coding values.

// Write a function that:

// Accepts two numbers

// Returns:

// The larger number

// If both numbers are equal, return "Same"

const compareNumbers = (a, b) => {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return "Same"
    }
}




// LOOPS (Pattern Thinking)
// 🎯 Goal

// Teach your brain to repeat logic without repeating code.

// CHALLENGE

// Write a program that:

// Loops from 1 to 50

// Prints:

// "Code" for multiples of 3

// "Logic" for multiples of 5

// "CodeLogic" for multiples of both

// The number itself otherwise

// 📌 Rules

// Use a for loop

// Use if / else if / else

// No arrays

// No shortcuts




for (let i =1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("CodeLogic")
    } else if (i % 3 === 0) {
        console.log("Code")
     } else if ( i % 5 === 0 ) {
        console.log("Logic")
    } else {
        console.log(i);
    }
}