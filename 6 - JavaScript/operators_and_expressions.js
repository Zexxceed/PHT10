// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 64;
let num2 = 5;
let num3 = 74;
let num4 = 6
let num5 = 70

console.log("Addition(+):" , num1+num2);
console.log("Subtraction(-):" , num3-num2);
console.log("Multiplication(*)):" , num5*num4);
console.log("Division(/)):" , num3/num2);
console.log("Exponent(**)):" , num3 ** num2);
console.log("Remainder(%)):" , num3 % num2);

// Order of operators
// PEMDAS - Parenthesis, Exponent, Multiplication, Division, Addition, and Subtraction
// BOMDAS -  Brackets, Orders, Multiplication, Division, Addition, and Subtraction

let answer = 3 + 4 * 5 * ( 5-2 ) ** 2 / 2;
console.log("Answer: ", answer);

// 2. String Expressions or Concatenation
console.log("Hello "+"World");
let greeting = "Hi";
let name = "Sebastian";
console.log(greeting + " " + name + "!");

// 3. Comparison Operators

// equal to "==": Check if the values are equal
console.log("Equal to (==):", 5 == 6);
console.log("Equal to (==) with coercion:", 5 == '5');

// not equal to "!="
console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=):", 5 != 6);

// Strict Equal to "===": Will check the value and data type strictly
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===) with coercion:", 5 === '5');

// Strict Not Equal to "!=="
console.log("Not Equal to (!==):", 5 !== 5);
console.log("Not Equal to (!==) with coercion:", 5 !== '6');

// Greater than (>), Lesser than (<), Greater than or equal to (>=), Lesser than or equal to (<=)
console.log("Greater than (>):", 5 > 7);
console.log("Greater than (>):", 5 > 4);
console.log("Lesser than (<):", 5 < 7);
console.log("Lesser than (<):", 5 < 3);
console.log("Greater than or equal to (>=):", 5 >= 5);
console.log("Lesser than or equal to (<=):", 5 <= 5);

// 4. Logical Operators
// && - AND
// || - OR
// ! - NOT

let sunny = true;
let warm = false;

// AND
console.log("Is it sunny? AND warm?:", sunny && warm);

// OR
console.log("Is it sunny? OR warm?:", sunny || warm);

// NOT
console.log("Is it sunny?:", !sunny);
console.log("Is it warm?:", !warm);

// 5. Assignment Operators
// assign value to a variable (=)
let num6 = 10;
let num7 = 5;

// Addition Assignment (+=)
console.log("Addition Assignment:",num6 += num7); // num3 = num3 + num4

// Subtraction Assignment
console.log("Subtraction Assignment:",num6 -= num7);
// Multiplication Assignment
console.log("Multiplication Assignment:",num6 *= num7);
// Division Assignment
console.log("Division Assignment:",num6 /= num7);
// Exponent Assignment
console.log("Exponent Assignment:",num6 **= num7);
// Remainder Assignment
console.log("Remainder Assignment:",num6 %= num7);