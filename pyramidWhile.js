// Set the character to be used in the pyramid
const character = "x"; // The character that will make up the pyramid
const count = 8;       // Total number of rows in the pyramid
const rows = [];       // Array to hold each row of the pyramid

// Function to create a padded row for the pyramid
function padRow(rowNumber, rowCount) {
  // Calculate leading spaces, characters, and trailing spaces for the current row
  return " ".repeat(rowCount - rowNumber) +  // Leading spaces to center the row
         character.repeat(2 * rowNumber - 1) + // Odd number of characters for the pyramid shape
         " ".repeat(rowCount - rowNumber);   // Trailing spaces for alignment
}

// While loop to generate rows of the pyramid until the desired count is reached
while (rows.length < count) {
  // Push the padded row into the rows array, calculating the current row number
  rows.push(padRow(rows.length + 1, count));
}

// Initialize an empty string to build the final output
let result = "";

// For loop to concatenate all rows into the result string
for (const row of rows) {
  result = result + "\n" + row; // Add each row to the result with a newline character
}

// Output the final pyramid pattern to the console
console.log(result); // Print the complete pyramid
