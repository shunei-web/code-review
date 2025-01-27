const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const nmq = require("gulp-merge-media-queries");
const browserSync = require("browser-sync");
const htmlBeautify = require("gulp-html-beautify");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// cssをコンパイルして圧縮する
function compileSass() {
  return gulp
    .src("./src/assets/sass/**/*.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssSorter()]))
    .pipe(nmq())
    .pipe(gulp.dest("./public/assets/css/"))
    .pipe(cleanCss())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("./public/assets/css/"));
}

function watch() {
  gulp.watch(
    "./src/assets/sass/**/*.scss",
    gulp.series(compileSass, browserReload)
  );
  gulp.watch("./src/assets/js/**/*.js", gulp.series(minJS, browserReload));
  gulp.watch("./src/assets/img/**/*", gulp.series(copyImage, browserReload));
  gulp.watch("./src/**/*.html", gulp.series(formatHTML, browserReload));
}
// ブラウザの初期化
function browserInit(done) {
  browserSync.init({
    server: {
      baseDir: "./public/",
    },
  });
  done();
}
// ブラウザのリロード
function browserReload(done) {
  browserSync.reload();
  done();
}

//　HTMLファイルのフォーマット整形
function formatHTML() {
  return gulp
    .src("./src/**/*.html") // `src` フォルダ内のHTMLファイルを対象
    .pipe(
      htmlBeautify({
        indent_size: 2, // インデント幅（2スペース）
        indent_with_tabs: true, // タブでインデント
      })
    )
    .pipe(gulp.dest("./public")); // 整形後のファイルを `public` フォルダへ保存
}

// jsファイルを圧縮する
function minJS() {
  return gulp
    .src("./src/assets/js/**/*.js")
    .pipe(gulp.dest("./public/assets/js/"))
    .pipe(uglify()) // 圧縮処理
    .pipe(
      rename({
        suffix: ".min", // 圧縮版に `.min` を付ける
      })
    )
    .pipe(gulp.dest("./public/assets/js/"));
}

// imgファイルをコピーする
function copyImage() {
  return gulp
    .src("./src/assets/img/**/*", { encoding: false })
    .pipe(gulp.dest("./public/assets/img/"));
}

exports.copyImage = copyImage;
exports.minJS = minJS;
exports.formatHTML = formatHTML;
exports.compileSass = compileSass;

exports.build = gulp.parallel(copyImage, compileSass, minJS, formatHTML);
exports.dev = gulp.parallel(browserInit, watch);

exports.default = gulp.parallel(browserInit, watch);

// ビルド
// npx gulp build

// ブラウザシンク
// npx gulp dev
// or
// npx gulp
