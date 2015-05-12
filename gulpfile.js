"use strict";
var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var livereload = require("gulp-livereload");

gulp.task("develop", function () {
  livereload.listen();

  nodemon({
    script: "server.js"
  }).on("restart", function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task("default", [
  "develop"
]);