// PostWork implementar el modulo de terceros, (moment)
var moment = require('moment');
moment.locale('es');

var fecha = moment().format('LLLL');

console.log(fecha);