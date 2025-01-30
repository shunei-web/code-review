import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);

const compileSass = () => {
  return gulp
    .src("./sass/**/*.scss", { encoding: false })
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
};

export const build = gulp.parallel(compileSass);

export default build;
