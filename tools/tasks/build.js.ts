import * as gulp from "gulp";
import { HTML_CONFIG, JS_CONFIG, SRC_CONFIG_FILE, loadSrcConfig } from "../config";
import * as _ from "lodash";
import { AssetInterface } from "../lib";

function buildJSTask(done: any) {
  let paths = {
  src: getJSAssetsSrc(),
  dest: JS_CONFIG.dest
}

  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest));
}

function getJSAssetsSrc() {
  let assets:AssetInterface[] = loadSrcConfig().assets;
  let sources:string[] = assets.filter(asset => asset.inject && asset.inject != false && (asset.src.endsWith(".js")))
  .map(asset => asset.src);
  return sources;
}

function config() {
    delete require.cache[require.resolve(SRC_CONFIG_FILE)];
    return require(SRC_CONFIG_FILE);
 }

gulp.task("build.js", (done: any) => buildJSTask(done));
export = buildJSTask;
