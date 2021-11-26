const https = require('https');

function getAPOD() {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';   
    resp.setEncoding('utf-8');

    // trozos de información recibida
    resp.on('data', (chunk) => {
      data += chunk;
      console.log(data);
    });

    // la respuesta completa ha sido recibida. Imprime el resultado
    resp.on('end', () => {
      let body = JSON.parse(data);

      console.log('Título:', body.title);
      console.log('\n Explicación', body.explanation);
      console.log('\n URL:', body.url);
    })
  });
}

getAPOD();

