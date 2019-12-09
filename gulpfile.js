/*
 * Importing all the installed/required `devDependencies`
 */
const gulp = require("gulp"),
  sass = require("gulp-sass"),
  jsmini = require("gulp-terser"),
  cssmini = require("gulp-uglifycss"),
  cssprefix = require("gulp-autoprefixer"),
  srcmaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create();

/*
 * Watch the files for changes
 */
const paths = {
  sass: {
    src: "./lib/sass/**/*.scss",
    dest: "./dist/css"
  },
  css: {
    src: "./dist/css/**/*.css",
    map: "../../lib/sourcmaps/css"
  },
  es6: {
    src: ["./lib/es6/**/*.js"],
    dest: "./dist/js"
  },
  js: {
    src: "./lib/es6/**/*.js",
    map: "../../lib/sourcmaps/js",
    dest: "./dist/js"
  },
  html: ["./**/*.html"]
};

/*
 *
 * Watch `scss` files to `css` and autoprefix,
 * and minify them
 * 
 * Watch all `js` files for changes and minify 
 * them
 * 
 */
function style() {
  return gulp
    .src(paths.sass.src)
    .pipe(srcmaps.init())
    .pipe(sass())
    .pipe(cssprefix("last 2 versions"))
    .pipe(cssmini())
    .pipe(srcmaps.write(paths.css.map))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream());
}
exports.style = style;

function js() {
  return gulp
    .src(paths.js.src)
    .pipe(srcmaps.init())
    .pipe(jsmini())
    .pipe(srcmaps.write(paths.js.map))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}
exports.js = js;

/*
 * Watch all the files for changes and stream/reload for changes
 */
const sync = cb => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  cb();
}
exports.sync = sync;

const watch = gulp.series(sync, cb => {
  gulp.watch(paths.sass.src, style);
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.html).on("change", browserSync.reload);

  cb();
});
exports.watch = watch;
