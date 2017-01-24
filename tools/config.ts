import { join } from "path";
import { argv } from "yargs";
import { EnvironmentsInterface, Environments } from "./lib";
var decache = require('decache');

/**
 * This class represents the basic configuration.
 * It provides the following:
 * - Constants for directories, ports, versions etc.
 * - SystemJS configuration
 * - BrowserSync configuration
 * - Utility Methods
 */
class Config {

  /**
   * The port where the application will run.
   * The default port is `3000`, which can be overriden by the  `--port` flag when running `npm start`.
   * @type {number}
   */
  PORT = argv["port"] || 3000;

  /**
   * The current environment.
   * The default environment is `dev`, which can be overriden by the `--env` flag when running `npm start`.
   */
  ENV = this.getEnvironment();


  /**
   * The path for the base of the application at runtime.
   * The default path is `/`, which can be overriden by the `--base` flag when running `npm start`.
   * @type {string}
   */
  PROJECT_BASE = argv["base"] || "/";


  NODE_MODULES_DIR = "node_modules";

  /**
   * The directory where the client files are located.
   * The default directory is `client`.
   * @type {string}
   */
  CLIENT_DIR = argv["client"] || "client";

  /**
   * The base folder of the project source files.
   * @type {string}
   */
  SRC_DIR = `src/${this.CLIENT_DIR}`;


  /**
   * The base folder for built files.
   * @type {string}
   */
  DIST_DIR = argv["dist"] || 'public';

  /**
   * The folder for built files in the `dev` environment.
   * @type {string}
   */
  DEV_DEST_DIR = `${this.DIST_DIR}`;

  /**
   * The folder for the built files in the `prod` environment.
   * @type {string}
   */
  PROD_DEST_DIR = `${this.DIST_DIR}`;

  /**
   * The folder for the built files, corresponding to the current environment.
   * @type {string}
   */
  DEST_DIR = this.ENV === Environments.DEVELOPMENT ? this.DEV_DEST_DIR : this.PROD_DEST_DIR;


  SRC_CONFIG_FILE = join(process.cwd(), `${this.SRC_DIR}/config.json`);


  /**
   * HTML files related configuration.
   * @type {any}
   */
  HTML_CONFIG = {
    src: `${this.SRC_DIR}/html`,
    dest: `${this.DEST_DIR}`,
    excluded: ["layouts", "macros", "partials"]
  };

  /**
   * Stylesheets related configuration.
   * @type {any}
   */
  CSS_CONFIG = {
    src: `${this.SRC_DIR}/stylesheets`,
    dest: `${this.DEST_DIR}/stylesheets`,
    dataFile: `${this.SRC_DIR}/data/global.json`,
    autoprefixer: {
      browsers: [
        'ie >= 9',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
      ]
    },
    cssnano: {
      discardComments: { removeAll: true },
      discardUnused: false, // unsafe, see http://goo.gl/RtrzwF
      zindex: false, // unsafe, see http://goo.gl/vZ4gbQ
      reduceIdents: false, // unsafe, see http://goo.gl/tNOPv0
      core: false // avoiding removal of whitespaces to keep css readable
    },
    sass: { "indentedSyntax": false },
    rucksack: {clearFix: false, fallbacks: true}
  };

  /**
     * Configuration for project's static files
     * @type {any}
     */
  STATIC_CONFIG = {
    src: `${this.SRC_DIR}/static`,
    dest: `${this.DEST_DIR}`
  };

  /**
     * Configuration for project's font files
     * @type {any}
     */
  FONTS_CONFIG = {
    src: `${this.SRC_DIR}/fonts`,
    dest: `${this.DEST_DIR}/fonts`
  };

  /**
   * Images related configuration
   * @type {any}
   */
  IMAGES_CONFIG = {
    src: `${this.SRC_DIR}/images`,
    dest: `${this.DEST_DIR}/images`,
    extensions: ["jpg", "png", "svg", "gif"]
  };

  /**
   * Sprite related configuration
   * @type {any}
   */
  SPRITE_CONFIG = {
    src: `${this.SRC_DIR}/icons`,
    dest: `${this.DEST_DIR}/images`,
    extensions: ["svg"]
  };

  /**
   * JS related configuration
   * @type {any}
   */
  JS_CONFIG = {
    src: `${this.SRC_DIR}/javascript`,
    dest: `${this.DEST_DIR}/javascript`,
    extensions: ["jpg", "png", "svg", "gif"]
  };

  /**
   * The directory of the project tools
   * @type {string}
   */
  TOOLS_DIR = "tools";

  /**
   * The directory of the tasks provided.
   */
  TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, "tasks");

  /**
   * The version of the application as defined in the `package.json`.
   */
  VERSION = this.appVersion();

  /**
   * The required NPM version to run the project.
   * @type {string}
   */
  VERSION_NPM = "2.14.2";

  /**
   * The required NodeJS version to run the project.
   * @type {string}
   */
  VERSION_NODE = "4.0.0";


  /**
   * Returns the project version as defined in the `package.json`.
   * @return {number} The project version.
   */
  appVersion(): number | string {
    let pkg = require("../package.json");
    return pkg.version;
  }

  loadSrcConfig(): any {
    decache(this.SRC_CONFIG_FILE);
    return require(this.SRC_CONFIG_FILE);
  }

  /**
   * Returns the environment of the project.
   */
  getEnvironment() {
    let base: string[] = argv['_'];
    let prodKeyword = !!base.filter(o => o.indexOf(Environments.PRODUCTION) >= 0).pop();
    let env = (argv['env'] || '').toLowerCase();
    if ((base && prodKeyword) || env === Environments.PRODUCTION) {
      return Environments.PRODUCTION;
    } else {
      return Environments.DEVELOPMENT;
    }
  }
}

const config: Config = new Config();
export = config;
