// Sintaxis


// Manera clásica:
async function quienEsePokemon() {

}

// Con arrow functions:
let quienEsEsePokemon = async () => {

}

// try/catch Manejo de Errorres
try {
  let pokemon = await quienEsEsePokemon();
  console.log(`El pokemon es ${pokemon.name}`);
} catch(err) {
  console.error(err);
}

// then y catch para manejo de errores
await quienEsEsePokemon()
  .then()
  .catch()
  return;



