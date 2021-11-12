// Destructuring

// Destructuring es extraer valores o propiedades de un arreglo u objeto.

// Caso Arreglo
const colors = ["Red", "Blue", "Yellow"];

const [red, blue, yellow] = colors;

console.log(red); // Red
console.log(blue); // Blue
console.log(yellow); // Yellow


// Caso Objeto

const person = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Unknown'
};

// Sin Destructuring
// const firstName = person.firstName;
// const lastName = person.lastName;

// console.log(firstName, lastName); // John Doe

// Con Destructuring

const { firstName, lastName } = person

console.log(firstName, lastName); // John Doe

