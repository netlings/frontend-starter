import * as gulp from "gulp";
import { join } from "path";
import * as changed from "gulp-changed";
import { STATIC_CONFIG } from "../config";

let paths = {
  src: [
    join(STATIC_CONFIG.src, '/**'),
    '*!README.md'
  ],
  dest: STATIC_CONFIG.dest
}

function buildStaticTask(done: any) {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task("build.static", (done: any) => buildStaticTask(done));
export = buildStaticTask;
