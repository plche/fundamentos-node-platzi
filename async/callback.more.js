/* function fact(n, ret) {
	if (n == 0)
		ret(1);
	else
		fact(n - 1, function (t0) {
			ret(n * t0)
		});
}
fact(5, function (n) {
	console.log(n); // Prints 120.
}) */

/* function fact2(n) {
	return tail_fact(n,1);
}
 
function tail_fact(n,a) {
	if (n == 0)
		return a;
  else
		return tail_fact(n-1,n*a);
}

console.log(fact2(5)); */

/**
 * Simulacion de asincronia en JavaScript (Funcion A).
 *
 * @param Array     list     Lista de numeros.
 * @param Function  callback Recibe la funcion B.
 */
const asincronia = (list, callback) => {
    //se valida que el parametro list sea un arreglo
    //y no este vacio
    if (list instanceof Array && list.length > 0) {
        let suma = list.map(valor => Math.pow(valor, 2));
        return callback(null, suma);
    }
    //si no se cumple la condicion se manda un error.
    else {
        let error = new Error("Error de ejecución . . . :( ");
        return callback(error, null);
    }
};
//========== Consiguiendo la respuesta correcta ==========//
asincronia([2, 3, 4, 5], (error, result) => (error) ? console.error(error) : console.log(result));

//========== Consiguiendo el error ==========//
asincronia([], (error, result) => (error) ? console.error(error) : console.log(result));