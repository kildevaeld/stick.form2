'use strict';

const gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    webpack = require('webpack-stream'),
    merge = require('merge2'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


const project = tsc.createProject('./tsconfig.json');
gulp.task('typescript', () => {
    let result = project.src()
    .pipe(tsc(project))
    
    let js = result.js
    .pipe(gulp.dest('lib'));
    
    let dts = result.dts.pipe(gulp.dest('lib'));
    
    return merge([js,dts]);
    
});

gulp.task('uglify', ['bundle'] ,() => {
    return gulp.src('./dist/stick.form.js')
    .pipe(uglify())
    .pipe(rename('stick.form.min.js'))
    .pipe(gulp.dest('dist'));
})

gulp.task('bundle', ['typescript'], () => {
    return gulp.src('./lib/index.js')
    .pipe(webpack({
        
        output: {
            libraryTarget: 'umd',
            library: ['stick', 'form'],
            filename: 'stick.form.js'
        },
        externals: {
            "stick": 'stick',
            "orange": "orange",
            'views.form': {
                commonjs: 'views.form',
                commonjs2: 'views.form',
                root: ['views', 'form'],
                amd: 'views.form'
            },
            'views': 'views'
        },
        module: {
            loaders: [
                {test: /\.js$/, loader: 'babel-loader', /*exclude: /(node_modules|bower_components)/,*/ query: { presets: ['es2015']}}
            ]
        }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['typescript', 'uglify']);

gulp.task('watch', () => {
    return gulp.watch('./src/**/*.ts', ['bundle']);
});