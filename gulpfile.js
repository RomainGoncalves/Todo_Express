"use strict";
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var livereload = require("gulp-livereload");
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

gulp.task("develop", function () {
  livereload.listen({port: 8081});

  nodemon({
    script: "server.js"
  }).on("restart", function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('bower', function(){

  // Separating CSS/JS
  var files = mainBowerFiles();
  var css = [];
  var js = [];

  files.forEach(function(file){
    var split = file.split('.');
    var extPosition = split.length - 1;
    if( split[extPosition] == 'js' ) js.push(file);
    if( split[extPosition] == 'css' ) css.push(file);
  });

  console.log( css );
  console.log( js );

  gulp.src(js)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('app/scripts/'));

  gulp.src(css)
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest('app/styles/'));
});

gulp.task("default", [
  "develop",
  "bower",
  "webserver"
]);