var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var image = require('gulp-image');

// watch files for changes and reload
gulp.task('serve', function(){
   browserSync({
      server: {
          baseDir: '.'
      } 
   });
   gulp.watch(['*.html', '**/*.html', 'js/*.js', 'css/*.css'], {cwd: '.'}, browserSync.reload);
});


gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('image', function(){
   gulp.src('./img/*') 
   .pipe(image())
   .pipe(gulp.dest('./dist/img'));
});

// copy complement...
gulp.src(['./pages/**/*']).pipe(gulp.dest('./dist/'));
gulp.src(['./fonts/**/*']).pipe(gulp.dest('./dist/fonts'));
// gulp.src(['./elements/**/*']).pipe(gulp.dest('./dist/elements'));
// gulp.src(['./pages/**/*']).pipe(gulp.dest('./dist/pages'));
// gulp.src(['./templates/**/*']).pipe(gulp.dest('./dist/templates'));
gulp.src(['./vendor/**/*']).pipe(gulp.dest('./dist/vendor'));

gulp.task('dist', ['compress', 'minify-css', 'image']);
