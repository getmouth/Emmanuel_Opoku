const gulp = require('gulp');
const scss = require('gulp-sass');

function css() {
  return gulp.src('src/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('public'));
}

gulp.task('default', css);
gulp.watch('src/*.scss', css);
