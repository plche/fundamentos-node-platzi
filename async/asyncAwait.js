/* Es importante resaltar que **siempre** que se use async/await es una excelente práctica encerrar el await en un try/catch esto nos permitirá manejar errores y evitar sorpresas cuando algo salga mal.

const foo = async() => {
	try {
		await myPromise();
	} catch(err) {
		console.error('Oops!' + err);
	}
} */

async function hola(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1500);
	});
}

async function hablar() {
	return new Promise((resolve, reject) => {
			setTimeout(function() {
				console.log('Bla bla bla bla...');
				// resolve();
				resolve('Hay un error');
			}, 1000);
	});
}

async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Adios, ' + nombre);
			resolve();
		}, 1000);
	});
}

async function main() {
	let nombre = await hola('Percy');
	await hablar();
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Termina el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instrucción');