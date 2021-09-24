// En Node.js (+v12.x) para exportar nuestros módulos, lo hacemos mediante module.exports.
function saludar() {
	console.log('Hola mundo!!');
}

// Si no exportamos nada, entonces al invocar el módulo reornará un objeto vacío.
// Podemos exportar simplemente un función
/* module.exports = saludar; */

// O podemos exportar un objeto, que contenga métodos y propiedades
module.exports = {
	saludar,
	prop1: 'Hola que tal'
}