// En Node.js (+v12.x) para hacer uso de nuestros módulos, así como de terceros lo hacemos mediante require().

// Traer nuestro módulo
const { saludar } = require('./modulo');
const modulo = require('./modulo');

// Mostrar qué hay en modulo
/* console.log(modulo); */

// Ejecutar una función del módulo
/* modulo(); */
console.log(modulo.prop1);
modulo.saludar();