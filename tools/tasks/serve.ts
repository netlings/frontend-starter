import * as gulp from "gulp";
import * as browserSync from "browser-sync";
import { PORT, PROJECT_BASE, DEST_DIR } from "../config";

function serveTask(done: any) {
  browserSync.init(
    {
      port: PORT,
      startPath: PROJECT_BASE,
      open: true,
      server: {
        baseDir: DEST_DIR,
        routes: {
          [`${PROJECT_BASE}node_modules`]: "node_modules"
        }
      }
    }
  );
}

gulp.task("serve", (done: any) => serveTask(done));
export = serveTask;
