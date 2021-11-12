// ES5

const nombre = "Joaquin";
console.log("Welcome" + " " + nombre);


// ES6


const nombre2 = "Juan";

console.log(`Welcome ${nombre2}`);


// múltiples líneas

const mensaje = `Welcome! 
Joaquin
Almunos
Ingrid
Juan
`;

console.log(mensaje);


// expresiones matemáticas

const a = 10;
const b = 20;

console.log(` a + b = ${a + b} `) //  a + b = 30

// Trabajar con arreglos.

// const colors = ['blue', 'red', 'yellow'];

// console.log(`Primary colors: ${colors.join(', ')}`); // Primary colors: blue, red, yellow

// funciones de alto orden.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//*reto definir la funcion

/*la funcion muestra los valores impares filtrando los valores donde la
operación de modulo sea distinto de cero (pares)*/
console.log(`odd numbers: ${
  numbers.filter(function (n) { 
    return n % 2 != 0;
  })
}`) // odd numbers: 1,3,5,7,9



// Spread operator
// Array

const colors = ["blue", "red", "yellow"]
const copyOfColors = colors;
const copyOfColorsWithSpread = [...colors]

console.log(colors); // ["blue", "red", "yellow"]
console.log(copyOfColors); // ["blue", "red", "yellow"]
console.log(copyOfColorsWithSpread); // ["blue", "red", "yellow"]

colors[0] = "white";


console.log(colors); // ["white", "red", "yellow"]
console.log(copyOfColors); // ["white", "red", "yellow"]
console.log(copyOfColorsWithSpread); // ["blue", "red", "yellow"]

// Lo mismo sucede con los objetos

const person = {
  firstName: "John",
  LastName: "Doe",
};


const copyOfPersonWithEqual = person;
const copyOfPersonWithSpread = {...person}

console.log(person)
console.log(copyOfPersonWithEqual)
console.log(copyOfPersonWithSpread)

person.firstName = "Jane"

console.log(person)
console.log(copyOfPersonWithEqual)
console.log(copyOfPersonWithSpread)

// objetos

const book = {
  author: "Martin",
  title: "Libro",
  year: 2018
}

const copyOfBook1 = book; // atraparlo en variable
const copyOfBook2 = {...book, year: 2019}; // Con Spread operator

console.log(book);
console.log(copyOfBook1);
console.log(copyOfBook2);