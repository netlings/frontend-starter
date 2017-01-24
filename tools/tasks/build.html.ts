import * as gulp from "gulp";
import * as path from "path";
import * as _ from "lodash";
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { Environments } from "../lib";
import { HTML_CONFIG, DEST_DIR, SRC_DIR, JS_CONFIG, CSS_CONFIG, NODE_MODULES_DIR, ENV, loadSrcConfig } from "../config";
import { AssetInterface } from "../lib";
import * as gulpif from 'gulp-if';

const plugins = <any>gulpLoadPlugins();

let paths = {
  src: [
    path.join(HTML_CONFIG.src, '/**/*.html'),
    path.normalize('!**/{' + HTML_CONFIG.excluded + '}/**')
  ],
  dest: HTML_CONFIG.dest
}

function buildHtmlTask(done: any) {

  let stream = gulp.src(paths.src)
    .pipe(plugins.data(loadSrcConfig()))
    .on('error', plugins.notify.onError((error: any) => { return error; }))
    .pipe(plugins.nunjucksRender({ path: [HTML_CONFIG.src], envOptions: { watch: false } }));

  getAssetsPlaceholders().forEach(placeholder => {
    stream = stream.pipe(plugins.inject(getPlaceholderAssetsSrc(placeholder), { name: placeholder, relative: false, ignorePath: `/${DEST_DIR}`, addRootSlash: false }))
  });

  return stream.pipe(plugins.htmlhint())
    .pipe(plugins.htmlhint.reporter('htmlhint-stylish'))
    .pipe(plugins.prettify({ indent_size: 2 }))
    .pipe(gulp.dest(paths.dest));
}

function getAssetsPlaceholders(): (string | boolean)[] {
  let assets: AssetInterface[] = loadSrcConfig().assets;
  let placeholders: (string | boolean)[] = assets.filter(asset => asset.inject && asset.inject != false)
    .map(asset => asset.inject);
  return _.uniq(placeholders);
}

function getPlaceholderAssetsSrc(placeholder: (string | boolean)) {
  let assets: AssetInterface[] = loadSrcConfig().assets;
  let sources: string[] = assets.filter(asset => asset.inject && asset.inject === placeholder)
    .map(asset => mapSrc(asset.src));
  return gulp.src(sources, { read: false });
}

function mapSrc(src: string) {
  let transformedPath = src;
  if (transformedPath.endsWith(".js")) {
    transformedPath = path.join(JS_CONFIG.dest, path.basename(transformedPath));
  }
  if (transformedPath.endsWith(".css")) {
    transformedPath = path.join(CSS_CONFIG.dest, path.basename(transformedPath));
  }
  if (transformedPath.endsWith(".scss")) {
    transformedPath = path.join(CSS_CONFIG.dest, path.basename(transformedPath).replace(".scss", ".css"));
  }
  return transformedPath;
}

gulp.task("build.html", (done: any) => buildHtmlTask(done));
export = buildHtmlTask;
