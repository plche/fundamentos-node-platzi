/* Las promesas son una sintaxis más elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible.
Una promesa no deja de ser un callback, con la novedad de tener estados; las promesas cuentan con 3 estados: resuelta, en progreso y en fallo.
Para utilizar una promesa debemos instanciar una nueva, una promesa en sí es una función que recibe dos argumentos, resolve y reject.
Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.
New Promise((resolve, reject) => {
…code
if(code === true) {
	resolve(correctValue);
} else {
	reject(wrongValue);
}
});
Para poder obtener los valores que retorna una función debemos utilizar su propiedad .then, esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.
Siempre que usemos una promesa además de realizar la propiedad .then debemos invocar la propiedad .catch, la cual es un callback que recibe como parámetro el error ocurrido en caso de haber sucedido uno.
Tener en cuenta que de suscitarse un error en alguna parte del código, la ejecución terminará con el manejor del mismo y el resto del código ya no será ejecutado.
myPromise(argumento)
	.then(data => console.log(data))
	.catch(err => console.log(err)); */

function hola(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1500);
	});
}

// No se necesita pasar el argumento nombre en hablar()
function hablar() {
	return new Promise((resolve, reject) => {
			setTimeout(function() {
				console.log('Bla bla bla bla...');
				// resolve();
				reject('Hay un error');
			}, 1000);
	});
}

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Adios, ' + nombre);
			resolve();
		}, 1000);
	});
}

// ---

console.log('Iniciando el proceso...');
hola('Percy')
	/* Una manera más formal:
	.then((nombre) => {
		return adios(nombre);
	}) */
	.then(hablar)
	.then(adios)
	.then((nombre) => {
		console.log('Terminado el proceso')
	})
	.catch(error => {
		console.error('Ha habido un error:');
		console.error(error);
	})