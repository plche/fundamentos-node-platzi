// El módulo sharp, veloz y de alto rendimiento para procesar (convertir) imágenes grandes en formatos comunes a imágenes JPEG, PNG, WebP y AVIF más pequeñas y compatibles con la web de diferentes dimensiones.
const sharp = require('sharp');

// Si deseamos redimensionar una imagen
sharp('original.png')
	.resize(80)
	.toFile('resized.png');

// Si además de redimensionarla, la convertimos a escala de grises
sharp('original.png')
	.resize(80)
	.greyscale()
	.toFile('resized.and.greyscaled.png');