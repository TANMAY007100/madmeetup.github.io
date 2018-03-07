var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
let cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('default', ['css', 'images', 'html', 'js']);

gulp.task('css', function()
{
  return gulp.src('app/**/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function()
{
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('html', function()
{
  gulp.src('app/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('js', function()
{
  gulp.src('app/**/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
        exclude: ['tasks']
    }))
    .pipe(gulp.dest('dist'))
});
