// Para poder hacer uso de módulos escritos en C++ dentro de Node.js empleamos node-gyp, revisar README.md en esta misma carpeta.
const miAddon = require('./build/Release/addon');

console.log(miAddon.hola());