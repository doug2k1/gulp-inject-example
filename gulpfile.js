var gulp = require('gulp'),
    inject = require('gulp-inject'),
    JS_SOURCE = require('./appfiles');

gulp.task('inject', function () {
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(JS_SOURCE, { read: false }), {
            addRootSlash: false,
            transform: function (filepath) {
                return '<doidera src="' + filepath + '">';
            }
        }))
        .pipe(gulp.dest('./src'));
});
