// Podemos hacer uso del debugger (inspector) de Node.js, mediante la bandera (--inspect, Ej.: node --inspect modulos/http.js) al momento de ejecutar nuestro código, y luego podemos emplear las DevTools de Google Chrome para apoyarnos en la depuración.

// El módulo HTTP de Node.js permite crear un servidor. Tiene todo lo necesario para crear un sistema de rutas (en base a las URLs), que responderá a cada ruta especificada, las cabeceras (Response Headers) que podrá enviar, etc.
// El método createServer() de este modulo nos permitirá abrir un puerto para crear el servidor y escuchar las peticiones en él.
const http = require('http');
// Vamos a escuchar las peticiones a nuestro servidor en un puerto que no requiera permisos de administrador, de esta manera evitamos una posible escalada de privilegios ya sea por una falla en nuestro código o por algún bug nativo que aún no se haya descubierto o problema de seguridad en las librerías que empleamos.
const puerto = 3000;

http.createServer(router).listen(puerto);

function router(req, res) {
  console.log('Nueva petición!');
  console.log(req.url);

	switch (req.url) {
		case '/hola':
			let saludo = hola();
			res.writeHead(201, {'Content-Type': 'text/plain; charset=utf-8'});
			res.write(saludo);
			res.end();
			break;
	
		default:
			res.writeHead(201, {'Content-Type': 'text/plain; charset=utf-8'});
			res.write('Error 404: No sé lo que quieres');
			res.end();
			break;
	}

	// Para trabajar con cabeceras (Response Headers), por ejemplo escribamos una de la siguiente manera
	/* res.writeHead(201, {'Content-Type': 'text/plain'}); */

	// Escribir respuesta al usuario
	/* res.write('Hola, ya sé usar HTTP de Node.js'); */

  // Para terminar la petición
	/* res.end(); */
}

function hola() {
	return 'Hola, qué tal';
}

console.log(`Escuchando http en el puerto ${puerto}`);