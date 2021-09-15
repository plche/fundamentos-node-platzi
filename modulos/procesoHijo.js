// Un único proceso de Node.js funciona bien, pero eventualmente no será suficiente para cubrir todas las necesidades de una aplicación, porque tendrá siempre una carga limitada. Usar multiples procesos es la mejor manera de escalar una aplicación Node.js.
// El módulo nativo llamado child_process permite acceder a funcionalidades del sistema operativo ejecutando cualquier comando del sistema dentro de un proceso secundario. Podemos controlar la secuencia de entrada de un proceso secundario y escuchar la secuencia de salida.
// Hay 4 maneras de crear un proceso secundario en Node.js: spawn(), exec(), execFile() y fork().
// Tener en cuenta que spawn() devuelve un stream y exec() devuelve un buffer; spawn() devuelve un objeto con stdout y stderr streams, se puede usar el stream de stdout para leer los datos que el proceso secundario envía de vuelta; stdout, además, es un stream que tiene "data", "end" y otros eventos que tienen los stream. Por otro lado, exec() devuelve toda la salida del buffer del proceso hijo, exec() debe usarse para ejecutar programas que devuelven estados de resultados, en lugar de datos.
// Resumiendo, usar spawn() cuando se desee que el proceso hijo devuelva datos binarios enormes. Usar exec() cuando se desee que el proceso hijo devuelva mensajes de estado simples. Usar spawn() cuando se desee recibir datos desde que el proceso arranca. Usar exec() cuando se desee recibir datos al final de la ejecución.

// Vamos a traernos algunas funciones de la librería child_process, por eso empleamos sitaxis de ES6 para desestructurar un objeto.
const { exec, spawn } = require('child_process');
// También podríamos haber hecho
/* const exec = require('child_process').exec; */

// exec(), nos permite ejecutar cualquier comando en la terminal.
/* exec('ls -al', (error, stdout, stderr) => { */
// Si quisieramos ejecutar otro proceso de Node.js:
/* exec('node modulos/consola.js', (error, stdout, stderr) => {
	if (error) {
		console.error(error);
		return false;
	}
	console.log(stdout);
}); */

// Para ejecutar un proceso más complejo y tener mayor control sobre él, empleamos spawn().
let proceso = spawn('ls', ['-al']);
// Podemos mostrar ahora el contenido de proceso y será parecido a cuando hacemos console.log(process).
/* console.log(proceso); */
console.log(proceso.pid);
console.log(proceso.connected);

// Para trabajar con los eventos podemos hacer:
proceso.stdout.on('data', function(dato) {
	console.log('¿Está termiando?');
	console.log(proceso.killed);
	console.log(dato.toString());
});

// Podemos detectar cuando el proceso termina:
proceso.on('exit', function() {
	console.log('El proceso terminó.');
	console.log(proceso.killed);
});