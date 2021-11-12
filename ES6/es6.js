// Scope

// var // Tiene un scope global y tambien local pero no todos los casos
// let // Tiene una scope global y tambien local en todos los casos de uso local

// const // Scope global pero es inmutable


const msg = ` Hello World desde Template Strings`;

console.log(msg)


// Spread operator

const colors = ["blue", "red", "yellow", "cafe", "morado"];

const copyColors = [...colors];

console.log(copyColors) // [ 'blue', 'red', 'yellow', 'cafe', 'morado' ]

const book = {
  author: "Sergio Mendieta",
  title: "Ejemplo libro",
  year: "2018",
}


const copyOfBook = {...book};

console.log(copyOfBook)






