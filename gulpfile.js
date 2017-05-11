var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('copy-jquery', function(){
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/'))
});

gulp.task('sofia', function(){
    gulp.src('src/sofyshare.js')
        .pipe(uglify())
        .pipe(concat('sofyshare.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function(){
    gulp.watch('src/sofyshare.js', ['sofia']);
});