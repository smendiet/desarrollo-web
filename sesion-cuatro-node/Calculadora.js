// node  = process.argv[0];
// ArchivoName = process.argv[1];

const tipoOperacion = '';
const num1 = -1;
const num2 = -1;

if (process.argv.length == 5) {
  tipoOperacion = process.argv[2];
  num1 = Number(process.argv[3]);
  num2 = Number(process.argv[4]);
} else {
  tipoOperacion = await 
}

// Calculadora tipoOperacion === Suma Resta Multiplica Divide
switch (tipoOperacion) {
  case 'suma':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'resta':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 'multiplica':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 'divide':
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    break;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout 
});

readline.question('¿Quien eres?', name => {
  console.log(`Hola ${name}`);
  readline.close();
});

// Postwork Readline + calculadora o cualquier sistema que quiera experimentar
