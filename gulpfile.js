
'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename')
const { parallel } = require('gulp');
const sass = require('gulp-sass'); 
sass.compiler = require("node-sass"); //necessario para funcionar gulp-sass
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', compilaSass);

function compilaSass(){
    return gulp
        .src("src/scss/*.scss")
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError)) //converter sass para css com gulp-sass
        .pipe(rename({extname:'.min.css'}))
        .pipe(gulp.dest("src/css/"));
}

exports.default = parallel( compilaSass );

// gulp.task('workflow', function(){
//     gulp.src('./src/sass/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer({
//             browser: ['last 2 versions'],
//             cascade: false
//         }))
//         
//         .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/css/'))
// });

// gulp.task('default', function(){
//     gulp.watch('./src/sass/**/*.scss', ['workflow']);
// });

