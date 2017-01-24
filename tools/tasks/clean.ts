import * as gulp from "gulp";
import { DEST_DIR } from "../config";
import * as del from "del";

function cleanTask(done: any) {
  return del([DEST_DIR], {force:true});
}

gulp.task("clean", (done: any) => cleanTask(done));
export = cleanTask;
