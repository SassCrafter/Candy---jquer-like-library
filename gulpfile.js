const { src, dest, watch, series } = require("gulp");
const babel = require("gulp-babel")
// Import new Gulp plugin.
const concat = require("gulp-concat")
const plumber = require("gulp-plumber")

function scripts() {
  return (
    src(['./src/utils.js','./src/candy.js', './src/$.js', './src/**/*.js'])
      .pipe(plumber())
      .pipe(concat("candy.js"))
      .pipe(
        babel({
          presets: [
            [
              "@babel/env",
              {
                modules: false
              }
            ]
          ]
        })
      )
      .pipe(dest("./dist"))
  )
}

function watchFiles(cb) {
    watch('./src/**/*.js', series(scripts));
}

exports.watch = watchFiles;