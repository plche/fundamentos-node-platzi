// Cuando gestionemos asincronías con callbacks, debemos seguir siempre un patrón, adoptado por convención, que es error first callback; es decir, siempre que tengamos un callback el primer parámetro debería ser el error; hay que recordar que en Node.js siempre se piensa que todo puede llegar a fallar en cualquier momento.

function asincrona(callback) {
	setTimeout(function() {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (error) {
			callback(error);
		}
	}, 1000);
}

asincrona(function(error, dato) {
	if (error) {
		// Gestionamos aquí el error o ¿podríamos lanzarlo para gestionarlo antes (más arriba)?
		console.error('Tenemos un error');
		console.error(error);
		return false;
		// No, no podríamos lanzar el error para gestionarlo antes puesto que no aplica para funciones asíncronas.
		/* throw error; */
	}

	console.log('Todo ha ido bien, mi data es', dato);
});