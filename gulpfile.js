var gulp=require("gulp");
var load=require("gulp-load-plugins")();
var browser=require("browser-sync").create();//开启静态服务器
var watch=require("gulp-watch");

//将scss文件预编译为css文件
gulp.task("sass",function(done){
    gulp.src('./src/css/*.scss')
    .pipe(load.sass())
    .pipe(load.rename('all.css'))
    .pipe(gulp.dest('./css'))
    done()
})
//压缩js文件
gulp.task('js',function(done){
    gulp.src('./src/js/*.js')
    .pipe(load.babel({
        presets:['@babel/env']
    }))
    .pipe(load.concat('all.js'))
    .pipe(load.uglify())
    .pipe(gulp.dest('./js'))
    done()
})

//保存文件
gulp.task('save',gulp.series(gulp.parallel('js','sass'),function(done){//串行执行压缩js和sass文件
//当并行执行结束之后再回调函数刷新浏览器
browser.reload();
done()

}))

//开启静态服务器

gulp.task('server',function(){
    browser.init({
        server:'./',//自动去寻找index.html页面
        port:"8080"
    });
    load.watch('./src',gulp.series('save'));
})