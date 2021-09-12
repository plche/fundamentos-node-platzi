// Los errores se propagan hacia arriba, de función en función en el event loop, a esto se llama efecto burbuja.
function otraFunction() {
	// return seRompe();
	seRompe();
}

function seRompe() {
	return 3 + z;
}

// Nuestro código se romperá porque esta función (específicamente setTimeout) se ejecuta en otro hilo, ya no en nuestro hilo principal (recordar el event loop), con lo que no tenemos forma de detectar esa ruptura (en un hilo aparte), desde nuestro hilo prinicipal. Por ello es que debemos caputar y gestionar el error dentro de esta misma función con un nuevo try-catch.
function seRompeAsincrona(cb) {
	setTimeout(function() {
		try {
			return 3 + z;
		} catch (error) {
				console.error('Error en mi función asíncrona');				
				cb(error);
			}
	});
}

// Empleamos try-catch para capturar y gestionar posibles errores en nuestro código, permitiendo de esta manera que la ejecución del hilo principal no se interrumpa y pueda continuar. Esto solo aplica para funciones síncronas.
try {
	// seRompe();
	// otraFunction();
	seRompeAsincrona(function(error) {
		console.log(error.message);
	});
} catch (error) {
		console.error('Vaya, algo se ha roto...');
		// console.error(error.message);
		// Mandamos toda la traza para saber desde dónde se produjo el error y hasta dónde (en este orden es que la traza mostrará las ubicaciones) fue en que se capturó y gestionó.
		console.error(error);
		console.log('Pero no pasa nada, lo hemos capturado');
	}

console.log('Esto de aquí está al final');