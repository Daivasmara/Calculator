var gulp = require ('gulp');
var sass = require ('gulp-sass');
var csso = require ('gulp-csso');
var concat = require ('gulp-concat');
var browserSync = require ('browser-sync');

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function(){
  return gulp.src('src/assets/sass/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/assets/css'))
});

gulp.task('js', function(){
  return gulp.src('src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('default', ['html', 'css', 'js'], function(){
  browserSync.init(['dist/*.html', 'dist/assets/css/*.css', 'dist/assets/js/*.js'], {
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/assets/sass/*.scss', ['css']);
  gulp.watch('src/assets/js/*.js', ['js']);
});
