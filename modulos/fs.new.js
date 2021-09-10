const fs = require('fs').promises;

async function escribir(path, contenido) {
	try {
		await fs.writeFile(path, contenido);
	} catch(error) {
		console.error(error);
		}
}

async function leer(path) {
	try {
		const data = await fs.readFile(path);
		return data.toString();
	} catch(error) {
			console.error(error);
		}
}

function borrar(path) {
	try {
		fs.unlink(path);
	} catch(error) {
			console.error(error);
		}
}

const CONTENIDO =
`Hola soy un archivo
Nueva linea del archivo`;

async function esperar(path) {
	setTimeout(() => {
		borrar(path);
	}, 3000);
}

async function main(path) {
	await escribir(path, CONTENIDO);
	const data = await leer(path);
	console.log(data);
	await esperar(path);
}

main('./file.txt');