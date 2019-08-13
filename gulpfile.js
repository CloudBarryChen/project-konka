var gulp = require('gulp');

var load = require('gulp-load-plugins')();

var browser = require('browser-sync').create();


gulp.task('default',function(done){
    console.log(load);
    done();
})

//压缩JS
gulp.task('js',function(done){
    gulp.src('./src/js/*.js')
    .pipe(load.concat('all.js'))
    .pipe(load.babel({
        'presets':['@babel/env']
    }))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js'))
    done();
})

//编译sass
gulp.task('sass',function(done){
    gulp.src('./src/css/*.scss')
    .pipe(load.sass())//先编译，避免带_的文件也合并
    .pipe(load.concat('index.scss')) //没有这句有多个scss文件时无法合并
    .pipe(load.cleanCss())
    .pipe(load.rename('index.css')) 
    .pipe(gulp.dest('./dist/css'))
    done();
})
    
//保存文件               前置任务(执行完之后才会执行后面的回调函数)
/* gulp.task('save',gulp.series('js','sass'),function(done){ */   //串行，做完js才会做sass 
/* gulp.task('save',gulp.parallel('js','sass'),function(done){ */   //并行，js、sass 同时做，效率高
gulp.task('save',gulp.series(gulp.parallel('js','sass'),function(done){   //串行、并行嵌套，使得文件编译完毕再重载浏览器
    browser.reload();
    done();
}))

//开启静态服务器
gulp.task('server',function(){
    browser.init({
        server:'./',
        port:'6677'
    })
    gulp.watch('./src',gulp.series('save'))
})