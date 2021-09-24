// En Node.js (+v12.x) para exportar nuestros módulos, lo hacemos mediante export default (ES6).
function saludar() {
	console.log('Hola mundo!!');
}

// Exportamos solo una función
/* export default saludar; */

// O exportamos un objeto
export default {
	saludar,
	prop1: 'Hola ES6'
}