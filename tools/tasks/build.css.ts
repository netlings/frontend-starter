import * as gulp from "gulp";
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
var objectFit = require('postcss-object-fit-images');
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { Environments } from "../lib";
import {HTML_CONFIG, CSS_CONFIG, ENV, loadSrcConfig } from "../config";
import { AssetInterface } from "../lib";

const plugins = <any>gulpLoadPlugins();

const processors = [
  autoprefixer(CSS_CONFIG.autoprefixer),
  objectFit()
];

if (ENV === Environments.PRODUCTION) {
  processors.push(
    cssnano(CSS_CONFIG.cssnano)
  );
}

function buildCssTask(done: any) {
  let paths = {
    src: getCSSAssetsSrc(),
    dest: CSS_CONFIG.dest
  };

  return gulp.src(paths.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(CSS_CONFIG.sass))
    .on('error', plugins.notify.onError((error: Error) => { return error.message; }))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.rucksack(CSS_CONFIG.rucksack))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
}

function getCSSAssetsSrc() {
  let assets:AssetInterface[] = loadSrcConfig().assets;
  let sources:string[] = assets.filter(asset => asset.inject && asset.inject != false &&
  (asset.src.endsWith(".css") || asset.src.endsWith(".scss") || asset.src.endsWith(".sass")))
  .map(asset => asset.src);
  return sources;
}

gulp.task("build.css", (done: any) => buildCssTask(done));
export = buildCssTask;

