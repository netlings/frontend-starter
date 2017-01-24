import * as gulp from "gulp";
import * as runSequence from "run-sequence";

function startTask(done: any) {
  runSequence("clean", "build", ["serve", "watch"], done);
}

gulp.task("default", (done: any) => startTask(done));
export = startTask;

