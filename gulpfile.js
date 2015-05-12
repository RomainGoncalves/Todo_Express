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
  gulp.src(mainBowerFiles())
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('app/scripts/'));
});

gulp.task("default", [
  "develop",
  "bower",
  "webserver"
]);