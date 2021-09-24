// El módulo bcrypt nos permite codificar (hash) contraseñas.
const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function(error, hash) {
	console.log(hash);

	bcrypt.compare(password, hash, function(error, response) {
		// console.log(error);
		console.log(response);
	});
});