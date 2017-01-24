import * as gulp from "gulp";
import { join } from "path";
import * as changed from "gulp-changed";
import { FONTS_CONFIG } from "../config";

let paths = {
  src: [
    join(FONTS_CONFIG.src, '/**'),
    '*!README.md'
  ],
  dest: FONTS_CONFIG.dest
}

function buildFontsTask(done: any) {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task("build.fonts", (done: any) => buildFontsTask(done));
export = buildFontsTask;
