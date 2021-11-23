const path = require('path');
const fs = require('fs');

// CRUD: Creación, lectura, actualización y borrado de documentos

// Crearemos un archivo utilizando la función: fs.writeFile()

fs.writeFile(path.join(__dirname, '/ejemplo_1.txt'), 'Este es el contenido de mi archivo', { encoding: 'utf-8'}, (err) => {
  if (err) throw err;
  console.log('writeFile:', 'Archivo creado');
});

// Para leer el contenido del archivo usaremos la función: fs.readFile()
fs.readFile(path.join(__dirname, '/ejemplo_1.txt'), { encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error);
  console.log('readFile:', data);
});

// Podemos update sobre nuestro archivo añadiendo un nueva linea con el siguiente código
fs.appendFile(path.join(__dirname, '/ejemplo_1.txt'), '\nEsto es una nueva línea', (err) => {
  if (err) throw err;
  console.log('appendFile', 'Archivo actualizado');
});

