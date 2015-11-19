var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/utilities/spritesheet/img/**/*.png').pipe(spritesmith({
    imgName: '../img/spritesheet.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('src/utilities/spritesheet'));
});