import * as gulp from "gulp";
import * as gulpLoadPlugins from "gulp-load-plugins";
import { join } from "path";
import * as runSequence from "run-sequence";
import { SRC_DIR, HTML_CONFIG, CSS_CONFIG, JS_CONFIG, SPRITE_CONFIG, IMAGES_CONFIG, FONTS_CONFIG, STATIC_CONFIG, SRC_CONFIG_FILE } from "../config";
import { reload } from "../lib";

const plugins = <any>gulpLoadPlugins();

function watchTask(done: any) {
  plugins.watch([join(HTML_CONFIG.src, "**")], (e: any) => runSequence("build.html", () => reload(e)));
  plugins.watch([join(CSS_CONFIG.src, "**")], (e: any) => runSequence("build.css", () => reload(e)));
  plugins.watch([join(JS_CONFIG.src, "**")], (e: any) => runSequence("build.js", () => reload(e)));
  plugins.watch([join(IMAGES_CONFIG.src, "**")], (e: any) => runSequence("build.images", () => reload(e)));
  plugins.watch([join(STATIC_CONFIG.src, "**")], (e: any) => runSequence("build.static", () => reload(e)));
  plugins.watch([join(FONTS_CONFIG.src, "**")], (e: any) => runSequence("build.fonts", () => reload(e)));
  plugins.watch([join(SPRITE_CONFIG.src, "**")], (e: any) => runSequence("build.sprite", () => reload(e)));
  plugins.watch([SRC_CONFIG_FILE], (e: any) => runSequence("build.html", "build.js", "build.css", () => reload(e)));
}

gulp.task("watch", (done: any) => watchTask(done));
export = watchTask;
