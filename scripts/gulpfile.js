const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')

const fontName = 'icons'

function icofontCss(cb) {
  gulp
    .src([`${__dirname}/../src/assets/icons/*.svg`])
    .pipe(
      iconfontCss({
        fontName,
        normalize: true,
        fontHeight: 3000,
        path: `${__dirname}/icon_css_class.template`,
        targetPath: 'icons.scss',
        cssClass: 'Icon',
      }),
    )
    .pipe(
      iconfont({
        fontName,
        normalize: true,
        fontHeight: 3000,
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'svg'],
      }),
    )
    .on('glyphs', glyphs => {
      // CSS templating, e.g.
      console.log(glyphs)
    })
    .pipe(gulp.dest(`${__dirname}/../src/assets/font`))
  cb()
}

exports.default = icofontCss
