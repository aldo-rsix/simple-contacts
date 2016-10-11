var gulp = require('gulp');
var dest = require('gulp-dest');
var defineModule = require('gulp-define-module');
var handlebars = require('gulp-handlebars');

gulp.task('templates', function() {
  // Load templates from the templates/ folder relative to where gulp was executed
  gulp.src('src/js/app/**/*.html', {
      base: 'src'
    })
    // Compile each Handlebars template source file to a template function
    .pipe(handlebars())
    // Define templates as AMD modules
    .pipe(defineModule('amd'))
    .pipe(dest('src/templates/:name.js'))
    .pipe(gulp.dest('./src/'))
});

// Default Task
gulp.task('default', ['templates']);
