// Postwork Readline + calculadora o cualquier sistema que quiera experimentar
const operaciones = ['suma', 'resta', 'multiplica', 'divide'];
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout 
});

const leer = async (question) => {
  return await new Promise(resolve => {
    readline.question(question, resolve);
  });
}

const main = async () => {
  const tipoOperacion = await leer(`Ingresar operación (${operaciones.join(',')}): `);
  const num1 = Number(await leer("Ingresar num1: "));
  const num2 = Number(await leer("Ingresar num2: ")); 

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
}

main()
  .then()
  .catch((err) => console.error(err))
  .finally(() => readline.close());
