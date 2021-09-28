// Benchmarking (probar el rendimiento o hacer una comparación), podemos conseguir saber el benchmarking de alguna parte de nuestro código delimitandolo entre console.time('label') y console.timeEnd('label'), lo que generará un temporizador para medir el tiempo empleado en su ejecución. 

console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
	suma += 1;	
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {
	suma2 += 1;	
}
console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso asíncrono');
asincrona()
	.then(() => {
		console.timeEnd('asincrono');
	});

console.timeEnd('todo');

function asincrona() {
	return new Promise((resolve) => {
		setTimeout(function() {
			console.log('Termina el proceso asíncrono');
			resolve();
		});
	});
}