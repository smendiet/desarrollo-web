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

    console.log(data);
  });
}

getAPOD();

