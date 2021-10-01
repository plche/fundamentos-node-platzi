// Para automatizar tareas (ejecución de procesos, en Inglés task runner), podemos emplear el módulo gulp. El módulo gulp-server-livereload, está desactualizado; hace uso de una versión obsoleta del módulo node-watch, para corregir el error de recursividad no soportado en Linux ha de instalarse la versión más reciente (a la fecha la node-watch 0.7.2).

const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
	console.log('Construyendo el sitio');
	setTimeout(cb, 1200);
});

gulp.task('serve', function(cb) {
	gulp.src('www')
		.pipe(server({
			livereload: true,
			open: true,
		}));
});

gulp.task('default', gulp.series('build', 'serve'));