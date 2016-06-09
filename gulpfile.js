var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function(){
	gulp.watch('templates/*.nunjucks', ['nunjucks']);
});

gulp.task('nunjucks', function() {
	return gulp.src('templates/index.nunjucks')
				.pipe(nunjucksRender({
					path:  ['templates/']
				}))
				.pipe(gulp.dest('./'));
});
