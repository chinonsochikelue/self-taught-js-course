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