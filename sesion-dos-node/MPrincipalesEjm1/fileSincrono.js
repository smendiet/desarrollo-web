const path = require('path');
const fs = require('fs');

fs.writeFileSync(path.join(__dirname, '/ejemplo_2.txt'), 'Este es el contenido de mi archivo', { encoding: 'utf-8'}, (err) => {
  if (err) throw err;
  console.log('writeFile:', 'Archivo creado');
});

data = fs.readFileSync(path.join(__dirname, '/ejemplo_2.txt'), { encoding: 'utf-8'});
console.log('readFileSync', data);

fs.appendFileSync(path.join(__dirname, '/ejemplo_2.txt'), '\nEsto es una nueva línea');
console.log('appendFileSync', 'Archivo actualizado')
