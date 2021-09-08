// Realizar callbacks nos puede resultar bien para gestionar y controlar nuestras funciones asíncronas, pero usarlas en exceso nos puede llevar a un problema conocido como callback hell, es el resultado de utilizar demasiados callbacks anidados, generando un código poco legible y mal organizado.
// Para evitar este problema podremos refactorizar nuestro código creando funciones intermediarias, funciones que tienen una lógica especial para tratar con estos tipos de problemas, existen otras formas de evitar estos callbacks hell con las promesas o el async await.

function hola(nombre, miCallback) {
	setTimeout(function() {
	  console.log('Hola, ' + nombre);
	  miCallback(nombre);
	}, 1500);
}

function hablar(callbackHablar) {
	setTimeout(function() {
		console.log('Bla bla bla bla...');
		callbackHablar();
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(function() {
		console.log('Adios, ' + nombre);
		otroCallback();
	}, 1000);
}

function conversacion(nombre, veces, callback) {
	if (veces > 0) {
		hablar(function() {
			conversacion(nombre, --veces, callback);
		});
	} else {
			adios(nombre, callback);
	}
}

// --

console.log('Iniciando proceso...');
hola('Percy', function(nombre) {
	conversacion(nombre, 3, function() {
		console.log('Proceso terminado');
	});
});

/* Callback Hell
hola('Percy', function (nombre) {
	hablar(function() {
		hablar(function() {
			hablar(function() {
				adios(nombre, function() {
					console.log('Terminando proceso...');
				});
			});
		});
	});
}); */