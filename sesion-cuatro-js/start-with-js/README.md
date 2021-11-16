# Jest

## Instalación

Para la instalación se debe usar el comando:
  npm install --save-dev jest

## Uso

Se debe crear la carpeta __tests__ en la raiz del proyecto. Por cada archivo que se quiere probar se debe agregar un archivo dentro de esta carpeta <nombre-archivo>.test.js

Dentro del archivo se debe exportar el archivo que se va a probar y se deben crear los test dentro del la función describe  

## Test

Cada test va a tener un input y un output

## Expect

Espectativas

## Ejecución

npm run test

## Jest & Babel

npm install --save-dev babel-jest

## Coverage

npm run test -- --coverage

### Añadir al package.json para ejecución automatica

dentro de la propiedad de jest:

"collectCoverage": true,
"coverageReporters": ["html"],