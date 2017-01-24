import * as gulp from "gulp";
import { join } from "path";
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { SPRITE_CONFIG } from "../config";

const plugins = <any>gulpLoadPlugins();

let paths = {
  src: [
    join(SPRITE_CONFIG.src, '/**/*.{'+ SPRITE_CONFIG.extensions + '}'),
    '*!README.md'
  ],
  dest: SPRITE_CONFIG.dest
}

function buildSpriteTask(done: any) {
  return gulp.src(paths.src)
    .pipe(plugins.imagemin()) // Optimize
    .pipe(plugins.svgstore())
    .pipe(gulp.dest(paths.dest));
}

gulp.task("build.sprite", (done: any) => buildSpriteTask(done));
export = buildSpriteTask;
