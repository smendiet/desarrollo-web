const https = require('https');

// AsyncAwait y Promesas
function obtenerPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
        let datos = '';

        // fragmentos de la api
        resp.on('data', (chunk) => {
          datos += chunk;
        })

        resp.on('end', () => {
          datos = JSON.parse(JSON.stringify(datos));
          resolve(datos);  
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
}


const pokemones = [
  "bulbasur",
  "charmader",
  "squirtle",
  "pidgey",
  "pikachu",
  "rattata",
  "alakazam",
  "onix",
  "mew",
  "wigglytuff",
];


async function atraparPokemones (pokemones) {
  try {
    let resultados = await Promise.all(
      pokemones.map(async (pokemon) => {
        let resultado = await obtenerPokemon(pokemon);
        console.log(`Pokemon atrapado ${pokemon}`);
        return resultado;
      })
    );

    return resultados;
  } catch (err) {
    console.error('Error', err);
  }
}

atraparPokemones(pokemones).then();

