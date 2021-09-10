// Para traernos un módulo a usar en Node.js que forma parte del core del mismo:
const fs = require('fs');

// Todo lo que hagamos con File System debería ejecutarse de forma asíncrona.
/* 
parámetro ruta: De dónde voy a leer el archivo.
parámetro cb: Es un callback que me permitirá hacer algo luego con el archivo leído. */
function leer(ruta, cb) {
	fs.readFile(ruta, (err, data) => {
		cb(data.toString());
	});
}

function escribir(ruta, contenido, cb) {
	fs.writeFile(ruta, contenido, (err) => {
		if (err) {
			console.error('No he podido escribirlo', err);
		} else {
			console.info('Se ha escrito correctamente');
		}
	});
}

function borrar(ruta, cb) {
	fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo1.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);