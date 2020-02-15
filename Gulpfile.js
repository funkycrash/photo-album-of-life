var gulp = require('gulp')
var imageResize = require('gulp-image-resize')
var parallel = require('concurrent-transform')
var changed = require('gulp-changed')

var os = require('os')

gulp.task('default', function() {
  return gulp
    .src('photos/**/*.jpg')
    .pipe(changed('photos-resized'))
    .pipe(parallel(imageResize({ width: 800 }), os.cpus().length))
    .pipe(gulp.dest('photos-resized'))
})
