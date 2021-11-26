function holamundo() {
  // todo
}

holamundo();

function suma(a, b) { // paso 2
  var c = a + b; // paso 3
  return c; // paso 4
}

suma(2, 3); // 1 y entry point, paso 5 y output

function resta(a, b, callback) {
  callback("Hola soy el callback");
  var c = a - b;
  return c;
}

console.log(resta(4, 5, function (g) {
  console.log(g)
}));

// ejemplo de funcioones sincronas
function primero() {
  console.log("Soy el 1");
}

function segundo() {
  console.log("Soy el 2");
}

function tercero() {
  console.log("Soy el 3");
}

primero();
segundo();
tercero();

// Funcion asincrona usando callback
function primerocb() {
  // Simula petición a un servidor con muchos datos
  setTimeout(function () {
    console.log("Soy el 1 cb");
  }, 5000);
}

// Estas funciones 2 y 3 dependen de la primera funcion
function segundocb() {
  setTimeout(function () {
    console.log("Soy el 2 cb");
  }, 6000);
}

// Esta función 3 depende de la función 2
function tercerocb() {
  setTimeout(function () {
    console.log("Soy el 3 cb");
  }, 7000);
}

primerocb();
segundocb();
tercerocb();



setTimeout(function () {
  console.log("Soy el 1");
  setTimeout(function () {
    console.log("Soy el 2");
    setTimeout(function () {
      console.log("Soy el 3");
      setTimeout(function () {
        console.log("Soy el 4");
        // Podría a ver más llamadas asíncronas
        // Soy la función 1320
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

