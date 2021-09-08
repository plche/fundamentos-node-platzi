function hola(nombre, miCallback) {
	//Paso3 Define el setTimeout, el cual después de un segundo y medio ingresará a la función que pasamos como argumento en el setTimeout
	setTimeout(function() {
		//Paso4 Imprimir saludo concatenando el parámetro nombre (string)
		console.log('Hola, ' + nombre);
		//Paso5 Invocamos el callback
		miCallback(nombre);
	}, 1500);
}

function adios(nombre, otroCallback) {
	//Paso14 Define el setTimeout, el cual después de un segundo ingresará a la función que pasamos como argumento en el setTimeout
	setTimeout(function() {
		//Paso15 Imprimir despedida concatenando el parámetro nombre (string)
		console.log('Adios, ' + nombre);
		//Paso16 Invocamos el callback
		otroCallback();
	}, 1000);
}

function hablar(callbackHablar) {
	//Paso9 Define el setTimeout, el cual después de un segundo ingresará a la función que pasamos como argumento en el setTimeout
	setTimeout(function() {
		//Paso10 Imprimir en consola
		console.log('Bla bla bla bla...');
		//Paso11 Invocar el callback
		callbackHablar();
	}, 1000);
	//Obs: Si aquí hubiese un código que no demore en ejecutarse haría primero esto que lo anterior a esta línea en esta función, es decir se ejecutaría estas líneas y después el setTimeout
}

function conversacion(nombre, veces, callback) {
	//Paso7 Condicionamos según la cantidad de veces el llamado a la función hablar o a la función adios
	if (veces > 0) {
		//Paso8 Invocamos la función hablar, enviando como argumento un callback
		//Mientras se cumpla esta condición se realizarán los pasos 7, 8, 9, 10 y 11, hasta que ya no se cumpla y pase a la sección else
		hablar(function() {
			//Paso12 Se vuelve a invocar a esta misma función, con la diferencia que va disminuyendo en uno la cantidad de veces invocada inicialmente
			conversacion(nombre, --veces, callback);
		})
	} else {
			//Paso13 Invocamos la función adios, enviando 2 argumentos (un string y una función), el 2do argumento será nuestro callback
			adios(nombre, callback);
		}
}

//Paso1
console.log('Iniciando proceso...');
//Paso2 Invocamos la función hola, con 2 argumentos (un string y una función), el 2do argumento será nuestro callback
//callback básicamente es pasar una funcion como argumento e invocarla en un proceso que no sabemos cuanto demorará en hacerlo
hola('Carlos', function(nombre) {
	//Paso6 Invocamos la función conversacion (función recursiva, que simplifica el código comentado de Callback Hell)
	//Enviamos 3 argumentos, siendo el 3ro un callback
	conversacion(nombre, 3, function() {
		console.log('Proceso terminado');
	});
});

// Callback Hell
// hola('Carlos', function(nombre) {
// 	hablar(function() {
// 		hablar(function() {
// 			hablar(function() {
// 				adios(nombre, function() {
// 					console.log('Terminando proceso...');
// 				});
// 			});
// 		});
// 	});
// });