// Imaginar los streams como el paso de datos de un punto a otro.
const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Codificamos el contenido a utf8, y así ya no necesitamos convertirlo a string
readableStream.setEncoding('utf8');

/* readableStream.on('data', function(chunk) {
	// console.log(chunk);
	data += chunk;
});

readableStream.on('end', function() {
	console.log(data);
}); */

// Para escribir sobre el buffer process.stdout
/* process.stdout.write('Hola');
process.stdout.write('que');
process.stdout.write('tal'); */

// Para ejemplificar el uso de un stream doble es decir de lectura y escritura a la vez
/* const Transform = stream.Transform;

function Mayus() {
	Transform.call(this);
} */
// Para hacer herencia automática para Mayus desde Transform
/* util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
	chunkMayus = chunk.toString().toUpperCase();
	this.push(chunkMayus);
	cb();
} */

// ES6 version aportada por Julia Suaréz
/* const mayus = new stream.Transform({
  transform(chunk, codif, cb) {
    this.push(chunk.toString().toUpperCase());
    cb();
  }
}); */

// ES6 version
class Mayus extends stream.Transform {
	_transform = function(chunk, codif, cb) {
		let chunkMayus = chunk.toString().toUpperCase();
		this.push(chunkMayus);
		cb();
	}
}

let mayus = new Mayus();

readableStream
	.pipe(mayus)
	.pipe(process.stdout);