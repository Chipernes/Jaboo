import fileInclude from "gulp-file-include";

export const pages = () => {
    return app.gulp.src(app.path.src.pages)
        .pipe(fileInclude())
        .pipe(app.gulp.dest(app.path.build.pages))
}