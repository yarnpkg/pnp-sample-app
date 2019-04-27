const gulp = require(`gulp`);
const gulpif = require(`gulp-if`);
const uglify = require(`gulp-uglify`);
const webpack = require(`webpack-stream`);

gulp.task('default', function() {
  return gulp
    .src(`sources`)
    .pipe(webpack(require(`./webpack.config.js`), require(`webpack`)))
    .pipe(gulpif(/\.js$/, uglify()))
    .pipe(gulp.dest(`dist/`));
});
