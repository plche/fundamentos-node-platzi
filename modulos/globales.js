// La documentación oficial de Node.js la encontramos en: https://nodejs.org/api/
// El objeto global es donde hallamos los módulos globales, que forman el core de Node.js.
// console.log(global);
// console.log(setInterval);
// setInterval devuelve un valor(Timeout) para emplearlo con clearInterval()
/* let i = 0;
let intervalo = setInterval(function() {
	console.log('Hola');
	if (i === 3) {
		clearInterval(intervalo);
	}
	i++;
}, 1000); */

// setImmediate(), es parecida a setInterval(), pero sin delay.
/* setImmediate(function() {
	console.log('Hola');
}); */

// El objeto process proporciona información y control sobre el actual proceso de Node.js
/* console.log(process); */

// __dirname, __filename proporcionan información acerca de la carpeta y el archivo del archivo fuente que Node.js está ejecutando.
/* console.log(__dirname);
console.log(__filename); */

// De ser posible evitar usar variables globales.
global.miVariable = 'elValor';
console.log(miVariable);