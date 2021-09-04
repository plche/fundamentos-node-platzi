/* En Linux, para pasar las variables de entorno, una de las maneras de hacerlo
es desde la linea de comandos en la Terminal así:
NOMBRE=Percy MI_WEB=plche.tk node conceptos/entorno.js */

// Otra manera es empleando dotenv y almacenamos las variables en un archivo .env

require('dotenv').config();
let nombre = process.env.NOMBRE || 'Sin nombre';
let mi_web = process.env.MI_WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es: ' + mi_web);
