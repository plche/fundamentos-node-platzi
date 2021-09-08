// Un parámetro es una variable en una definición de función/método. Cuando se llama a una función/método, los argumentos son los datos que se pasan a los parámetros de la función/método.

// En JavaScript, las funciones son elementos de primer nivel, al ser ciudadanos/objetos de primera clase pueden emplearse de cualquier manera, por ejemplo pasándolas como argumentos.

// Un callback es una función que se pasa como argumento a otra función, para ser llamada (called back) en otro momento. La función que recibe como argumento otras funciones es denominada función de orden superior (higher-order function), esta contiene la lógica correspondiente para ejecutar adecuadamente el callback.

function hola(nombre, miCallback) {
	setTimeout(function() {
	  console.log('Hola, ' + nombre);
	  miCallback(nombre);
	}, 1500);
}

function adios(nombre, otroCallback) {
	setTimeout(function() {
		console.log('Adios, ' + nombre);
		otroCallback();
	}, 1000);
}

console.log('Iniciando proceso...');
hola('Percy', function (nombre) {
	adios(nombre, function() {
		console.log('Terminando proceso...');
	});
});

// hola('Percy', function() {});
// adios('Percy', function() {});