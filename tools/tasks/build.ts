import * as gulp from "gulp";
import * as runSequence from "run-sequence";
import { Environments } from "../lib";
import { ENV } from "../config";

function buildTask(done: any) {
  runSequence("build.js", "build.css", "build.images", "build.sprite", "build.static", "build.fonts", "build.html", done);
}

gulp.task("build", (done: any) => buildTask(done));
export = buildTask;

