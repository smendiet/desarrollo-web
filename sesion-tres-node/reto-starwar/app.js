const https = require('https');

let getData = new Promise((resolve, reject) => {
  https.get('https://swapi.dev/api/people/', (resp) => {
    let data = '';
    resp.setEncoding('utf8');

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      let peoples = JSON.parse(data);
      resolve(peoples);
    });
    
    resp.on('error', (err) => reject(err));
  });
});

const sortPeoples = (peoples) => {
  console.log('Por #films ascendente')
  peoples
    .sort((a, b) => a.films.length - b.films.length)
    .map((people) => console.log(`Name: ${people.name}, #Films: ${people.films.length}`));

  console.log('\nPor nombre descendente')
  peoples
    .sort((a, b) => {
      if(a.name > b.name) { return -1; }
      if(a.name < b.name) { return 1; }
      return 0;
    })
    .map((people) => console.log(`Name: ${people.name}`));
};

getData
  .then((data) => sortPeoples(data.results))
  .catch((error) => console.error(error));
