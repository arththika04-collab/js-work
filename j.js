// Write a program to round a floating number to 2 decimals and display it with a currency symbol using template literals.

let price = 125.6789;
let roundedPrice = price.toFixed(2);
console.log(`Rs ${roundedPrice}`);  

// Get a user’s full name and display it in uppercase without extra spaces.
let fullName = prompt("Enter your full name");
let cleanedName = fullName.trim().toUpperCase();
console.log( `my name is:  ${cleanedName}`);  

// Format a receipt like:Item: Keyboard Price: Rs 250.00 (padEnd() for alignment.)
let item = "Keyboard";
let pricee = 250;
let formatted = `Item: ${item.padEnd(15)}     Price: Rs ${price.toFixed(2)}`;
console.log(formatted);  

// Convert "123abc" safely to a number and handle NaN using Number.isNaN().
let value = "123abc";
let converted = Number(value);
if (Number.isNaN(converted)) {
  console.log("Invalid number!");
} else {
  console.log(`Converted number: ${converted}`)
}
// Create a function that takes a list of product prices and returns the total with commas (e.g., 1,234.56).
function getTotal(prices) {
  let total = prices.reduce((sum, price) => sum + price, 0);
  return total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
let productPrices = [650.99, 550.98, 2099.5];
 console.log(`Total: Rs ${getTotal(productPrices)}`);


let text = "hello@@world@@!";
let cleaned = text.replaceAll("@", "");
console.log(cleaned);  


