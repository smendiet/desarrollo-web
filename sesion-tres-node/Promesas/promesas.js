const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) return reject(error);
      return resolve(data);  
    })
  });
}

readFile("./archivo.txt")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Una promesa sólo puede completarse con éxito o falla una vez
// Pendiente, Resuelta y Rechazada
// Importante: las promeas tienen la particularid de que se pueden encadenar then,
// siendo el resultado de una promeesa, los datos de entrada de otra posible función, además,
// tiene un mecanismo para el manejo de errores catch


let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numero = Math.random(); // 0 y el 1, 0.1, 0.2, 0,3
    if (numero >= 0.5) resolve("Exito"); 
    reject("Error");
  }, 2000)
});

promesa.then((data) => console.log(data)).catch((data) => console.log(data));
console.log("Inicio")
// Primera capa a la hora de hacer mis sistemas (funciones)

