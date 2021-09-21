// npm es un gestor de paquetes (módulos) para Node.js; cuando desarrollamos aplicaciones basadas en Node.js no necesitamos reinvetar la rueda (creándola desde cero), es decir, si ya existe un módulo (paquete) para proveer la funcionalidad que necesita nuestra aplicación, entonces la mandamos requerir con npm y éste gestionará la misma como una dependencia dentro de un documento json llamado package.json junto con otros datos de nuestra aplicación, como su nombre, el autor, la versión, etc. Una de las ventajas de emplear módulos mediante npm, es que quienes los desarrollan, realizan comprobaciones que quizá nosotros nos la pasaríamos por alto, además de que constantemente son actualizados.

// Para usar un paquete, en este caso is-odd, mediante npm, hay que instalarlo primero; en la terminal nos ubicamos en la carpeta de nuestra aplicación y ejecutamos el siguiente comando:
/* npm install is-odd */

const isOdd = require('is-odd');

console.log(isOdd(3));

/* npm tiene algunos comandos para gestionar paquetes en un proyecto, a continuación algunos:

Iniciar un proyecto
npm init

Iniciar un proyecto con configuración automática
npm init -y

Instalar dependencias para producción
npm install nombreDelPaquete --save

Otra alternativa para instalar dependencias para producción o desarrollo
npm i nombreDelPaquete -S

Instalar dependencias solo para desarrollo
npm install nombreDelPaquete --save-dev
npm i nombreDelPaquete -D

Instalar dependencias de manera global
npm install -g nombreDelPaquete
npm i -g nombreDelPaquete

Instalar una versión especifica de una dependencia
npm install -g nombreDelPaquete@1.0.0

Desinstalar dependencias
npm uninstall nombreDelPaquete

Ver dependencias desactualizadas
npm outdate

Actualizar las dependencias desactualizadas
npm update */