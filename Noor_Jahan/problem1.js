function calculator(a, b, operation) {
  operation = operation.toLowerCase(); 

  switch (operation) {
    case 'add':
    case '+':
      return a + b;
    case 'subtract':
    case '-':
      return a - b;
    case 'multiply':
    case '*':
      return a * b;
    case 'divide':
    case '/':
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    default:
      return 'Error: Invalid operation';
  }
}

let a = 12.5;
let b = 4.5;
let operation = 'multiply'; 

let result = calculator(a, b, operation);
console.log(`Result: ${result}`);
