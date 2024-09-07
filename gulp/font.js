const { dest, src } = require('gulp');
const multipipe = require('multipipe');

const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = function fonts(env='dev') {
    if (env === 'build') {
        return multipipe(
            src('src/fonts/*.{woff,woff2}'),
            dest('build/fonts')
        );
    }

    return multipipe(
        src('assets/fonts/*.ttf'),
        ttf2woff(),
        ttf2woff2(),
        dest('src/fonts')
    );
}
