# Stylesheet Assets (Sass)
Sass is the greatest, and libsass (via node-sass) is the fastest! Put your Sass here. 

Stylesheet Assets follow modular approach to manage various stylings logically:
------ | -----
**Components** | This folder keeps all the partial `scss` files that represents stylings for the common UI components used across the project. 
**Fonts** | All custom/web font definitions are kept in this folder.
**Layouts** | All styling related to structure/layouts used in the project should be kept in this folder.
**Mixins** | This folder provides various SASS mixins that are commonly required.  Add yours as necessary.
**Variables** | This folder includes various custom SASS variables as well as Bootstrap 4 variables that you may wan to override.
**Pages** | Any page specific stylings is kept in this folder.
**Settings** | Settings includes any utility CSS classes or any HTML element specific global css you may want to modify.
**main.scss** | `main.scss` imports all the partial stylesheets from all folder, to create single file that can be compiled into css.
**bootstrap.scss** | `bootstrap.scss` includes Bootstrap framework stylings. It is kept separate as generally this is not needed to be modified. However you may wish to include it as well in `main.scss` if you wish to create just one stylesheet file for the project.
**iconfont.scss** | If you're using the Icon Font task, a `generated` folder containing `_icons.sass` will be automatically created. This file imports the partial SASS file to create a separate stylesheet. Again, you may wish to just import the partial file in `main.scss`.


### Tasks and Files
```
tools/tasks/build.css.ts
```
Your Sass gets run through Autoprefixer so don't prefix! The examples use the indented `.sass` syntax, but use whichever you prefer. Output is optimised with [cssnano](https://github.com/ben-eb/cssnano).

You can set various configuration options for these processors and compilers in `tools\config.ts` by modifying `CSS_CONFIG` options.
