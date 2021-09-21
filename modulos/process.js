// El módulo process permite acceder al proceso mismo de Node.js y conocer todo lo relacionado a él, como capturar sus eventos y gestionarlos.

// Para poder limpiar la terminal:
/* process.stdout.write('\x1Bc'); */
// Para además de limpiar la terminal, limpiar el buffer del scroll vertical de la terminal.
/* process.stdout.write("\u001b[3J\u001b[2J\u001b[1J"); */

// No es necesario importar (mediante require()) el módulo process, porque es un módulo global.
/* const process = require('process'); */

// Para detectar el evento justo antes de salida (beforeExit) del proceso:
process.on('beforeExit', () => {
	console.log('El proceso va a terminar');
});

// Para detectar el evento salida (exit) del proceso:
process.on('exit', () => {
	console.log('El proceso acabó');
	// Para demostrar que ya nos desconectamos del Event Loop:
	setTimeout(() => {
		console.log('Esto ya no se mostrará jamás');
	}, 0);
});

setTimeout(() => {
	console.log('Esto sí se mostrará');
}, 0);

// Para capturar una excepción que no ha sido capturada y gestionada antes (es decir, en ninguna otra parte de nuestra aplicación o código):
process.on('uncaughtException', (error, origen) => {
	console.error('Detectado error que no fue capturado y gestionado antes');
	/* console.error(error); */
	setTimeout(() => {
		console.log('Esto viene desde la excepción');
	}, 0);
});

// Invocamos una función que no existe para demostrar la excepción:
funcionQueNoExiste();

console.log('Esto no se muestra ya que se detectó antes una excepción (error)');

// Para capturar una promesa que ha sido rechazada y no fue capturada y gestionada antes (es decir, en ninguna otra parte de nuestra aplicación o código):
/* process.on('unhandleRejection', () => {
	console.log('El proceso acabó');
}); */

// Hay muchos eventos más que se pueden escuchar, así como otras señales mediante process.on('');