# Frontend Starter

Frontend Starter is a boilerplate that help you get started with your frontend projects leveraging modern frontend development workflows and technologies.

## Features
Features | Tools Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/) ([Libsass](http://sass-lang.com/libsass) via [node-sass](https://github.com/sass/node-sass)), [Autoprefixer](https://github.com/postcss/autoprefixer), [CSSNano](https://github.com/ben-eb/cssnano), Source Maps, [Rucksack](https://simplaio.github.io/rucksack/), Postcss
**JavaScript** | Folder to keep all your custom Javscript, managed and injected into HTML page using simple JSON configuraition file.
**HTML** | [Nunjucks](https://mozilla.github.io/nunjucks/), [gulp-data](https://github.com/colynb/gulp-data), [gulp-prettify] (https://www.npmjs.com/package/gulp-prettify)
**Images** | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin)
**Icons** | Auto-generated [SVG Sprites](https://github.com/w0rm/gulp-svgstore) and/or [Icon Fonts](https://www.npmjs.com/package/gulp-iconfont)
**Fonts** | Folder and `.sass` mixin for including WebFonts
**Live Updating** | [BrowserSync](http://www.browsersync.io/)
**Asset Management** | Manage and inject css and javascript assets on the html page, through a simple JSON configuration file.
**CSS Framework** | [Bootstarp 4] (http://v4-alpha.getbootstrap.com/)
**Code Linters** | [HTMLHint] (https://www.npmjs.com/package/html5-lint), [StyleLint] (https://www.npmjs.com/package/gulp-stylelint)

## Requirements 

### Windows 10
Make sure following tool are installed already in your system, or you can download the installers from the links provided and run a basic setup:

1. Git, GitBash 
    - https://git-scm.com/download/win
    
2. NodeJS 
    - https://nodejs.org/en/download/
    
3. Python (v2.7 recommended, v3.x.x is not supported)
    - https://www.python.org/ftp/python/2.7.12/python-2.7.12.amd64.msi
    - Make sure to select, Add Paython.exe in the PATH during setup.
    
4. Visual Studio 2015 - Community Edition
    - Select Custom Install
    - Select Visual C++ in programming languages
    

### Mac OS X
1. Git (already installed on Mac OS X)
2. Python (v2.7 recommended, v3.x.x is not supported) (already installed on Mac OS X)
3. NodeJS
    - https://nodejs.org/en/download/
4. Xcode
    - You also need to install the Command Line Tools via Xcode. You can find this under the menu Xcode -> Preferences -> Downloads. This step will install gcc and the related toolchain containing make

### Install global dependencies
Install global dependencies with following command through your terminal window once all above tools are installed.

```bash
npm install --global gulp-cli && npm install --global typings && npm install --global typescript && npm install --global yarn
```

## Start a new project
Open Terminal window to run following commands:
```bash
git clone git@gitlab.netlingshq.com:root/sass-framework.git new-project
cd new-project
```

#### Clear out `git` data
Be sure and clear out the `git` data to start a fresh history for your new project:
```bash
rm -rf .git && git init
git add --all
git commit -m "Initialized with Frontend Starter"
```

#### Install node dependencies
```bash
yarn
```

## Usage 
### Run server in development mode:
```
npm start
```
Aliases: `npm run gulp`

This is where the magic happens. The perfect front-end workflow. This runs the default gulp task, which starts compiling, watching, and live updating all our files as we change them. BrowserSync will start a server on port 3000, or do whatever you've configured it to do. You'll be able to see live changes in all connected browsers. Don't forget about the additional BrowserSync tools available on port 3001!

All files will compile in development mode (uncompressed with source maps). [BrowserSync](http://www.browsersync.io/) will serve up files to `localhost:3000` and will stream live changes to the code and assets to all connected browsers. Don't forget about the additional BrowserSync tools available on `localhost:3001`!


### Build files in development mode:
```bash
npm run build
```
This will just compile the files in development mode in source folder to specified distribution folder. This will not run a live server.

## Configuration
Why run this as an npm script? NPM scripts add ./node_modules/bin to the path when run, using the packages version installed with this project, rather than a globally installed ones. Never `npm install -g` and get into mis-matched version issues again. These scripts are defined in the `scripts` property of `package.json`.

All commands in the package.json `scripts` work this way. The `gulp` command runs the `default` task, defined in `tools/tasks/start.ts`.

Directory and top level settings are conveniently exposed in `tools/config.ts`. Use this file to update paths to match the directory structure of your project, and to adjust task options.

Not all configuration is exposed here. For advanced task configuration, you can always edit the tasks themselves in `tools/tasks`.

## Asset Task Details
A `README.md` with details about each asset task are available in their respective folders in the `src` directory:

- [JavaScript](src/javascripts)
- [Stylesheets](src/stylesheets)
- [HTML](src/html)
- [Fonts](src/fonts)
- [Images](src/images)
- [Icon Font](src/icons#iconfont-task)
- [SVG Sprite](src/icons#svg-sprite-task)
- [Static Files (favicons, etc.)](src/static)

