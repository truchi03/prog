let number1 = Number(prompt('Digite primer número'));
let number2 = Number(prompt('Digite segundo número'));
let operator = prompt('Digite operador (+, -, *, /)');
let result;

if(operator === '+') {
  result = number1 + number2;
  document.write('La suma ' + number1 + '+' + number2 + ' es: ' + result)
} else if(operator === '-') {
  result = number1 - number2;
  document.write('La resta ' + number1 + '-' + number2 + ' es: ' + result)
} else if(operator === '*') {
  result = number1 * number2;
  document.write('La multiplicación ' + number1 + '*' + number2 + ' es: ' + result)
} else if(operator === '/') {
  result = number1 / number2;
  document.write('La división ' + number1 + '/' + number2 + ' es: ' + result)
} else {
  document.write('Ha digitado un operador incorrecto')
}