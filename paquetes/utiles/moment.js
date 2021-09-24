// El módulo moment nos permite analizar (parse), validar, manipular y formatear fechas.
const moment = require('moment');

let ahora = moment();

console.log(ahora.toString());

// Si queremos formatear la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'));