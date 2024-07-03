const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*',{encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('./build/scripts')); 
}

exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
