let num1 = 10;
let num2 = 20;

const multiplier = 2;

var sum = num1 + num2;

let product = num1 * multiplier;
var difference = num2 - num1;
const result = sum + product + difference;

console.log("Sum using var:", sum);
console.log("Product using let and const:", product);
console.log("Difference using var:", difference);
console.log("Final result mix of let, const, var:", result);

num1 = 15;
sum = num1 + num2;

let updatedProduct = num1 * multiplier;
var updatedDifference = num2 - num1;
const updatedResult = sum + updatedProduct + updatedDifference;

console.log("Updated Sum (using var):", sum);
console.log("Updated Product (using let and const):", updatedProduct);
console.log("Updated Difference (using var):", updatedDifference);
console.log("Updated Final Result:", updatedResult);
