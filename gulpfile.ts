import gulp from 'gulp'
import eslint from 'gulp-eslint'
import ts from 'gulp-typescript'
import uglify from 'gulp-uglify'
import replace from 'gulp-replace'
import jest from 'gulp-jest'
const tsProject = ts.createProject(`tsconfig.json`)
const srcDir = `src`
const destDir = `dist`
const testDir = `__tests__`

export const build = done => {
  gulp
    .src(`${srcDir}/*.ts`)
    .pipe(eslint({ useEslintrc: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(tsProject())
    .pipe(
      uglify({
        mangle: true,
        compress: true,
      })
    )
    .pipe(replace(/^(.*)$/, `javascript:$1`))
    .pipe(gulp.dest(destDir))
  done()
}
export const test = done => {
  gulp.src(`${testDir}/*.ts`).pipe(jest({}))
  done()
}
export const dev = done => {
  gulp.series(`build`, `test`)(done())
}
export default build
