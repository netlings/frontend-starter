import * as gulp from "gulp";
import { join } from "path";
import * as changed from "gulp-changed";
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { IMAGES_CONFIG } from "../config";

const plugins = <any>gulpLoadPlugins();

let paths = {
  src: [
    join(IMAGES_CONFIG.src, '/**/*.{'+ IMAGES_CONFIG.extensions + '}'),
    '*!README.md'
  ],
  dest: IMAGES_CONFIG.dest
}

function buildImagesTask(done: any) {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(plugins.imagemin()) // Optimize
    .pipe(gulp.dest(paths.dest));
}

gulp.task("build.images", (done: any) => buildImagesTask(done));
export = buildImagesTask;
