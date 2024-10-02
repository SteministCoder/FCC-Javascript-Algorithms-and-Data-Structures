//Create a pyramid of x
let character = "x";
let count = 10;
let rows = [];

function spaces(rowNumber, count){
  return " ".repeat(2 * count - rowNumber) + character.repeat(2* rowNumber - 1) + " ".repeat(count-rowNumber);
}; 

for (let i = 1; i <= count; i ++) {
  rows.push(spaces(i, count));
};

let result = "";

for (const row of rows){
  result += "\n" + row;
};

console.log(result);
