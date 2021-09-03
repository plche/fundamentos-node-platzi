//Monohilo: Implicaciones en diseño y seguridad

/*PROCESO DE NODE

		1.- Va a abrirse un proceso, ese proceso es un proceso de node
		2.- Interpreta todo el archivo
		3.- Convertirlo a código maquina
		4.- Prepara todo lo que necesita para ejecutarse
		5.- Se ejecuta
		6.- Se cierra el proceso, y termina

DESVENTAJAS MONOHILO

		- Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
		- Debes estar pendiente de todo el código
		El hecho de que sea monohilo lo hace delicado en el sentido de que puede ejecutarse algo que corte el código y
		detenga el programa, como la ausencia de sintaxis o una variable pendiente por definir
*/
console.log('Hola mundo');
let i = 0;
setInterval(function () {
	console.log(i);
	i++;

	// if (i === 5) {
	//     console.log('forzamos error');
	//     var a = 3 + z;
	// }
}, 1000);

console.log('Segunda instrucción');