// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal. Es la forma mas cruda en la que se pueden almacenar datos. (Se guardan en bytes y no se especifica el tipo de dato). Los buffers son muy útiles porque suelen provenir de un stream.

/* let buffer = Buffer.alloc(4); */
// <Buffer 00 00 00 00>

/* let buffer = Buffer.from([1, 2, 5]); */
// <Buffer 01 02 05>

/* let buffer = Buffer.from('Hola'); */
// <Buffer 48 6f 6c 61>

/* console.log(buffer.toString()); */

// --

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
	abc[i] = 97 + i;
}

console.log(abc.toString());