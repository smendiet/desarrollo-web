function divide(num1, num2) {
  console.log(num1 / num2);
}

function sumar(num1, num2) {
  console.log(num1 + num2);
}

function restar(num1, num2) {
  console.log(num1 - num2);
}

function multiplica(num1, num2) {
  console.log(num1 * num2);
}

module.exports = {
  sumar: sumar,
  restar: restar,
  multiplica: multiplica,
  divide: divide,
}