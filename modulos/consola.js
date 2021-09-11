// El módulo console.
// console.log(), nos a permitir ver simplemente algo, lo que sea. Pero se entiende que es a modo de registro (log).
console.log('Algo');

// console.info(), parecido a console.log(), pero su uso esta más orientado a informar (info).
console.info('Atención');

// console.error(), para cuando se desea trabajar con un error en la consola.
console.error('Error!');

// console.warn(), si no se trata de un error, pero potencialmente podría convertirse, es mejor advertir.
console.warn('Advertencia!');

// console.table(), para mostrar datos, como una lista de objetos literales, de manera tabular.
var tabla = [
	{
		a: 1,
		b: 'Z'
	},
	{
		a: 2,
		b: 'Otra'
	}
]
console.log(tabla);
console.table(tabla);

// console.group() y console.groupEnd(), permiten agrupar una cantidad de logs formando parte de un mismo cojunto.
console.group('Conversación:');
console.log('Hola');
console.group('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('Blablabla');
console.log('Adios');
console.groupEnd('Conversación:');

console.log('Otra cosa de otra función');
// Ejemplo de uso práctico de console.group() y console.groupEnd().
function function1() {
	console.group('Función 1');
	console.log('Esto es de la Función 1');
	console.log('Esto también es de la Función 1');
	console.log('Y esto también es de la Función 1');
	function2();
	console.log('Hemos vuelto a la Función 1');
	console.groupEnd('Función 1');
}

function function2() {
	console.group('Función 2');
	console.log('Ahora estamos en la Función 2');
	console.groupEnd('Función 2');
}

console.log('Empezamos:');
function1();

// console.count(), muy útil para hacer uso de un contador; incluso podemos reiniciarlo con console.countReset().
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

// console.time() y console.timeEnd(), para contabilizar en milisegundos el tiempo que toma en ejecutarse nuestro código.
console.time('sum1000');
let sum = 0;
for (let i = 0; i < 1000; i++) {
	sum = sum + i;	
}
console.timeEnd('sum1000');

// console.clear(), para limpiar nuestra consola.
/* console.clear(); */