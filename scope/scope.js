// Scope Global
var nombre = "Vero";
var segundoNombre = "Leti";

function foo() {
  // console.log(nombre)
  // console.log(segundoNombre)
}
foo();
// console.log(nombre)

// Scope local

function foo2() {
  var nombre2 = "Pablo";
  // console.log(nombre2);
}

foo2();

// console.log(nombre2)

// Scope en condicionales

if (true) {
  var myname = "Pedro";
  console.log(myname); // Pedro
}


console.log(myname) // Pedro


// Scope loop

var numbers =  [1, 2, 3, 4, 5];
var dubles = [];

for (var i = 0; i < numbers.length; i++) {
  dubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(dubles); // [2, 4, 6, 8, 10]

console.log(i) // inesperado acceso