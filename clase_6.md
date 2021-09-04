# Herramientas útiles
## Para Desarrollo:

Podemos emplear [nodemon](https://nodemon.io/), que sirve para autoejecutar nuestro proceso/servidor una vez realizado algún cambio en él.

### Instalación: `npm install -g nodemon`

### Uso: `nodemon ruta/a/proceso_servidor.js`

## Para Producción:

Podemos emplear [pm2](https://pm2.keymetrics.io/), que sirve para gestionar nuestro proceso/servidor.

### Instalación: `npm install pm2 -g`

### Uso: `pm2 start ruta/a/proceso_servidor.js`